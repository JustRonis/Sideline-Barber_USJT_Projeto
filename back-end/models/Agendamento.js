const mongoose = require('mongoose')

const Agendamento = mongoose.model('Agendamento', {
    nome: String,
    endereco: String,
    data: String,
    cep: String,
    numero: String,
    complemento: String,
    hora: String,
    observacao: String
  });


module.exports = Agendamento;