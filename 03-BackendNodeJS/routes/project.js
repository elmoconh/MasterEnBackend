//cargar Express
const express = require("express");
const router = express.Router();

//cargar el controlador
const projectController = require("../controllers/project");

//Definir las rutas
router.post("/save", projectController.save);

// Exportar el router
module.exports = router;