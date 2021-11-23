//http://localhost:3000/auth/register


require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require ('cors')

const app = express();

// models
const User = require("./models/User");
const Barbeiro = require("./models/Barbeiro");
const Agendamento = require("./models/Agendamento");

// Config JSON response
app.use(express.json());
app.use(cors())

// Open Route
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo a Sideline Barber!" });
});

// Private Route
app.get("/user/:id", async (req, res) => {
  const id = req.params.id;

  // check if user exists
  const user = await User.findById(id, "-senha");

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  res.status(200).json({ user });
});


app.post("/auth/register", async (req, res) => {
  const { nome, email, senha, celular, estado, cep, endereco, numero, complemento } = req.body;

  // validations
  if (!nome) {
    return res.status(422).json({ msg: "O nome é obrigatório!" });
  }

  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }

  if (!senha) {
    return res.status(422).json({ msg: "A senha é obrigatória!" });
  }


  // check if user exists
  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.status(422).json({ msg: "Por favor, utilize outro e-mail!" });
  }


  // create user
  const user = new User({
    nome,
    email,
    senha,
    celular,
    estado,
    cep,
    endereco,
    numero,
    complemento
  });

  try {
    await user.save();

    res.status(201).json({ msg: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

app.post("/agendamento/register", async (req, res) => {
  const { nome, endereco, data, cep, numero, complemento, hora, observacao } = req.body;

  // create user
  const agendamento = new Agendamento({
    nome,
    endereco,
    data,
    cep,
    numero,
    complemento,
    hora,
    observacao
  });

  try {
    await agendamento.save();

    res.status(201).json({ msg: "Agendamento criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

app.post("/barbeiro/register", async (req, res) => {
  const { nome, email, senha, celular, estado, cep, endereco, numero, complemento, cpf, rg, permito, sobre } = req.body;

  // validations
  if (!nome) {
    return res.status(422).json({ msg: "O nome é obrigatório!" });
  }

  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }

  if (!senha) {
    return res.status(422).json({ msg: "A senha é obrigatória!" });
  }


  // check if user exists
  const userExists = await Barbeiro.findOne({ email: email });

  if (userExists) {
    return res.status(422).json({ msg: "Por favor, utilize outro e-mail!" });
  }

  const barbeiro = new Barbeiro({
    nome,
    email,
    senha,
    celular,
    estado,
    cep,
    endereco,
    numero,
    complemento,
    cpf,
    rg,
    permito,
    sobre
  });

  try {
    await barbeiro.save();

    res.status(201).json({ msg: "Barbeiro criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

app.get("/barbeiro/all", async (req, res) => {

  const barbeiros = await Barbeiro.find();
  console.log(barbeiros);
  try {
    res.status(201).json(barbeiros);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});



app.put("/auth/forgot", async (req, res) => {
  const { email, senhaAntiga, senhaNova } = req.body;


  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }

  if (!senhaAntiga) {
    return res.status(422).json({ msg: "A senha antiga é obrigatória!" });
  }

  if (!senhaNova) {
    return res.status(422).json({ msg: "A senha nova é obrigatória!" });
  }

  // check if user exists
  const userExists = await User.findOne({ email: email });

  if(!userExists) {
    res.status(500).json({ msg: "usuario não encontrado" });
  }

   if(userExists.senha === senhaAntiga) {
    userExists.senha = senhaNova;
   } else {
    res.status(500).json({ msg: "senha antiga errada" });
   }

  try {
    await userExists.save();

    res.status(201).json({ msg: "Usuário alterado com sucesso!" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

app.post("/auth/login", async (req, res) => {
  const { email, senha } = req.body;
  let valida = false

  // validations
  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }

  if (!senha) {
    return res.status(422).json({ msg: "A senha é obrigatória!" });
  }

  // check if user exists
  const user = await User.findOne({ email: email });


  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

 if(user.senha === senha) {
    valida = true;
 }


  if (!valida) {
    return res.status(422).json({ msg: "Senha inválida" });
  }
   
  if(valida) {
    res.status(200).json({ msg: "Autenticação realizada com sucesso!" });
  }

});

mongoose
  .connect(
    `mongodb://localhost:27017/cadastro`
  )
  .then(() => {
    console.log("Conectou ao banco!");
    app.listen(8000);
  })
  .catch((err) => console.log(err));
