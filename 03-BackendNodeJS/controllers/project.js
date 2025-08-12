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

module.exports = { save };