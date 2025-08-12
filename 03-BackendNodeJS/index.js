// Importando dependencias

const connection = require('./database/connection'); // Asegúrate de que la ruta sea correcta
const express = require('express');
const cors = require('cors');
const project = require('./models/project');


//Conexion a la base de datos
connection();

//crear el servidor
const app = express();

// Configurar el puerto
const port = process.env.PORT || 3977;

// Configurar Cors
app.use(cors());

//Convertir los datos del body a objetos
app.use(express.json())
app.use(express.urlencoded({ extended: true })); //

// Cargar Rutas
const projectRoutes = require('./routes/project');
app.use("/api/project", projectRoutes);


//Crear EndPoints de prueba

app.get("/", (req, res) => {
    console.log("Se ha llamado la ruta raiz");

    return res.status(200).json(
        [
            {
                curso: "Master en Backend",
                URL: "https://www.udemy.com/course/master-en-backend/"
            },
            {
                curso: "Master en Node JS",
                URL: "https://www.udemy.com/course/master-en-node-js/"
            },
            {
                curso: "Master en JavaScript",
                URL: "https://www.udemy.com/course/master-en-javascript/"
            }
        ]

    );
});



app.get("/pruebitas", (req, res) => {
    console.log("Se ejecutó este endpoint de prueba");
    return res.status(200).send(
        `<section>
            <h1>Estoy Aprendiendo Node JS</h1>
            <h3>Esto es una prueba de una ruta</h3>
        </section>`

    );
})

//Poner el servidor a escuchar
app.listen(port, () => {
    console.log("Servidor funcionando en el puerto: " + port);
});