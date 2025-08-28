//cargar Express
const express = require("express");
const router = express.Router();

//cargar el controlador
const projectController = require("../controllers/project");

//configurar multer
const multer = require("multer");

const storage =  multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "./uploads/images")
    },
    filename: (req, file, cb) => {
        cb(null, "project-" + Date.now()+ "-"+ file.originalname)
    }

});


const upload  = multer({storage});

//Definir las rutas
router.post("/save", projectController.save);
router.get("/projects", projectController.projects);
router.get("/item/:id", projectController.item);
router.delete("/delete/:id", projectController.deleteProject);
router.put("/update", projectController.updateProject);
router.put("/upload/:id", upload.single("file0"), projectController.upload);
router.get("/image/:file", projectController.getImage);


// Exportar el router
module.exports = router;