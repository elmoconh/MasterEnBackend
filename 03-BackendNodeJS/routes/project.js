//cargar Express
const express = require("express");
const router = express.Router();

//cargar el controlador
const projectController = require("../controllers/project");

//Definir las rutas
router.post("/save", projectController.save);

router.get("/projects", projectController.projects);

router.get("/item/:id", projectController.item);
router.delete("/delete/:id", projectController.deleteProject);
router.put("/update", projectController.updateProject);


// Exportar el router
module.exports = router;