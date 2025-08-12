const mongoose = require('mongoose');

// Conexión a la base de datos MongoDB
const connection= async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/bd-portafolio');
        console.log("Conexión a la base de datos exitosa");
    }catch (error){
        console.log(error);

        throw new Error("No se ha podido conectar a la base de datos");
    }
}
module.exports = connection;