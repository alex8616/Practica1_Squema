const mongoose =require('mongoose');
mongoose.connect("mongodb://172.18.0.1:27017/tarea1");
module.exports = mongoose;
