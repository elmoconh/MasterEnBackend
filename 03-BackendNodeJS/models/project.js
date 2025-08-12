// importar la libreria de Moongoose
const {Schema, model} = require('mongoose')


// Crear Esquema (estructura de cada documento de tipo proyecto)
const projectSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    }, 
    description:
    {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },  
    image:{
        type: String,
        default: "default.png"
    },  
    created_at: {
        type: Date,
        default: Date.now
    }
});
// Crear el modelo, indicarle la colecccion donde se van a guardar los documentos
//Exportar el modelo

module.exports = model("Project", projectSchema, "manyProjects")