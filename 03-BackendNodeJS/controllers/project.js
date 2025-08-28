const fs = require("fs");
const path = require("path");

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

const upload = (req, res) => {

    // 1. Obtiene el ID del proyecto desde los parámetros de la solicitud.
    let id = req.params.id;

    // 2. Verifica si se ha subido un archivo; si no, responde con error 400.
    if (!req.file) {
        return res.status(400).send({
            status: "error",
            message: "No se subió ningún archivo"
        });
    }

    // 3. Obtiene la ruta y extensión del archivo subido.
    const filePath = req.file.path;
    const extension = path.extname(req.file.originalname).toLowerCase().replace(".", "");

    // 4. Valida que la extensión del archivo sea una imagen permitida.
    const validExtensions = ["png", "jpg", "jpeg", "gif"];
    if (!validExtensions.includes(extension)) {
        // Si no es válida, elimina el archivo subido y responde con error.
        fs.unlinkSync(filePath);

        return res.status(400).send({
            status: "error",
            message: "Extension no valida"
        });
    }

    // 5. Actualiza el proyecto en la base de datos con el nombre del archivo de imagen.
    Project.findByIdAndUpdate({ _id: id }, { image: req.file.filename }, { new: false })
        .then(projectUpdate => {
            // 6. Si el proyecto no existe, elimina el archivo subido y responde con error 404.
            if (!projectUpdate) {
                fs.unlinkSync(filePath);

                return res.status(404).send({
                    status: "error",
                    message: "No hay proyecto para mostrar"
                })
            }

            // 7. Si el proyecto tenía una imagen anterior (distinta de "default.png"), la elimina del sistema de archivos.
            if (projectUpdate.image && projectUpdate.image != "default.png") {
                const oldImagePath = "./uploads/images/" + projectUpdate.image;
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }

            // 8. Responde con éxito, incluyendo información del archivo subido y su extensión.
            return res.status(200).send({
                status: "success",
                message: "Actualizado",
                project: projectUpdate,
                newFile: req.file.filename
            });
        })
        .catch(error => {
            // 9. Si ocurre un error durante la actualización, elimina el archivo subido y responde con error 500.
            fs.unlinkSync(filePath);

            return res.status(500).send({
                status: "error",
                message: "Error al actualizar el proyecto",
                error
            });
        });
}

const getImage = (req, res) => {
    //Sacar el nombre del archivo
    const file = req.params.file;

    //Construir la ruta del fichero
    const filePath = "./uploads/images/" + file;

    //Comprobar si existe
    fs.stat(filePath, (error, exist) => {
        if (!error && exist) {
            //Devolver respuesta
            return res.sendFile(path.resolve(filePath));
        } else {
            //Devolver respuesta
            return res.status(404).send({
                status: "Error",
                message: "la imagen no existe",
            });
        }
    })


}


module.exports = {
    save,
    projects,
    item,
    deleteProject,
    updateProject,
    upload,
    getImage
};