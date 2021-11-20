var mongoose = require('mongoose')
var Schema = mongoose.Schema

/**
 * Servicos:
 * 
 * -> id: int
 * -> servicos: String
 * -> preco: Number

 * 
 */

var ServicosSchema = new Schema({
    servicos: String,
    preco: Number,
    
});

module.exports = mongoose.model('Servicos', ServicosSchema);