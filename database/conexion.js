const mongoose =require('mongoose');
mongoose.connect("mongodb://192.168.64.3:27017/tarea1");
module.exports = mongoose;
