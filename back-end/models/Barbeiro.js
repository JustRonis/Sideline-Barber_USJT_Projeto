const mongoose = require('mongoose')

const Barbeiro = mongoose.model('Barbeiro', {
    nome: String,
    email: String,
    senha: String,
    celular: String,
    estado: String,
    cep: String,
    endereco: String,
    numero: String,
    complemento: String,
    cpf: String,
    rg: String,
    permito: Boolean,
    sobre: String
  });


module.exports = Barbeiro;