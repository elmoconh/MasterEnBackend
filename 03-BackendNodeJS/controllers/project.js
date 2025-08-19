const Project = require("../models/project");

const save = (req, res) => {
    //recibo Datos
    let body = req.body;
    //Validar datos
    if (!body.name || !body.description) {
        return res.status(400).send({
            status: "error",
            message: "Los campos nombre y descripción son obligatorios"
        });
    }
    //crear el objeto
    let projectToSave = new Project(body);

    //guardar el objeto
    projectToSave.save().then(project => {

        if (!project) {
            return res.status(404).send({
                status: "Error",
                message: "No se ha guaradado el proyecto"
            });
        }
        return res.status(200).send({
            status: "success",
            project
        });

    }).catch(error => {
        return res.status(500).send({
            status: "error",
            message: "Error al guardar el proyecto",
            error
        });
    });

}

//Listar todos los proyectos
const projects = (req, res) => {
    Project.find()
        .then(projects => {
            if (!projects) {
                return res.status(404).send({
                    status: "error",
                    message: "No hay proyectos para mostrar"
                })
            }
            return res.status(200).send({
                status: "Success",
                projects
            });
        })
        .catch(error => {
            return res.status(500).send({
                status: "error",
                message: "Error al listar los proyectos",
                error
            });
        });
}


//consultar un unico proyecto
const item = (req, res) => {
    let id = req.params.id
    console.log(id);
    Project.findById(id)
        .then(project => {
            if (!project) {
                return res.status(404).send({
                    status: "error",
                    message: "No hay proyecto para mostrar"
                })
            }
            return res.status(200).send({
                status: "Success",
                project
            });
        })
        .catch(error => {
            return res.status(500).send({
                status: "error",
                message: "Error al listar el proyecto",
                error
            });
        });

}
//eliminar un proyecto
const deleteProject = (req, res) => {
    let id = req.params.id;
    console.log("buscando el proyecto: ", id);
    Project.findByIdAndDelete(id)
        .then(project => {

            if (!project) {
                return res.status(404).send({
                    status: "error",
                    message: "No hay proyecto para mostrar"
                })
            }

            return res.status(200).send({
                status: "success",
                message: "Eliminado",
                project

            });
        })
        .catch(error => {
            return res.status(500).send({
                status: "error",
                message: "Error al listar el proyecto",
                error
            });
        });
}

//actualizar un proyecto 
const updateProject = (req, res) => {
    let body = req.body;

    if (!body || !body.id) {
        return res.status(400).send({
            status: "error",
            message: "No se encontraron datos para actulizar"
        });
    }

    Project.findByIdAndUpdate(body.id, body, { new: true })
        .then(projectUpdate => {
            if (!projectUpdate) {
                return res.status(404).send({
                    status: "error",
                    message: "No hay proyecto para mostrar"
                })
            }
            return res.status(200).send({
                status: "success",
                message: "Actualizado",
                projectUpdate

            });
        })
        .catch(error => {
            return res.status(500).send({
                status: "error",
                message: "Error al actualizar el proyecto",
                error
            });
        });
}



module.exports = {
    save,
    projects,
    item,
    deleteProject,
    updateProject
};