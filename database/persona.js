const mongoose = require("./conexion");

var PERSONASCHEMA = {
    foto: String,
    nombre: String,
    email: String,
    password:String,
};

const PERSONAS= mongoose.model("persona", PERSONASCHEMA);
module.exports = PERSONAS;
