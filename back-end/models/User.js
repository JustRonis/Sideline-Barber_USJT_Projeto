const mongoose = require('mongoose')

const User = mongoose.model('User', {
  nome: String,
  email: String,
  senha: String,
  celular: String,
  estado: String,
  cep: String,
  endereco: String,
  numero: String,
  complemento: String
})



module.exports = User
