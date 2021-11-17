// configurar setup

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Servico = require('./app/models/servicos');
const servicos = require('./app/models/servicos');

mongoose.connect('mongodb://localhost:27017/mongodb-nodejs');

//Configuracao da variavel app para usar o 'BodyParser()':
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Definindo a porta onde sera executada a api:
var port = process.env.PORT || 8000;

//Rotas API
//========================


//Criando uma instancia das Rotas via Express:
var router = express.Router();

router.use(function(req, res, next) {
    console.log('Algo esta acontecendo aqui.....');
    next();
});

//Rota de exemplo:
router.get('/', function(req, res) {
    res.json({ message: "Beleza! Bem vindo a nossa Sideline Barber"})
});


//Api's:
//========================================================================

//Rotas que terminarem com '/servicos' (servir: GET ALL & POST)
router.route('/servicos')

    // 1) Metodo: Criar Servicos (acessar em: POST http://localhost:8000/api/servicos)
    .post(function(req, res) {
        var servico = new Servico();

        // setar os campos do produtos (via resquest);
        servico.servicos = req.body.servicos;
        servico.preco = req.body.preco;

        servico.save(function(error) {
            if (error)
                 res.send('Erro ao tentar cadastrar o corte......' + error);
                 
            res.json({ message: 'Corte Cadastrado com Sucesso!'});
        });
    })

    // 2) Metodo: Selecionar Tosos Produtos (acessar em: GET http://localhost:8000/api/servicos)
    .get(function(req, res) {
        Servico.find(function(error, servico) {
            if(error)
                res.send('Error ao tentar Selecionar Todos os serviços...' + error);
            
            res.json(servico);
        });

        //Rotas que terminam em /servicos/:servico_id (servir tanto para; GET, PUT & DELETE: ID)
        router.route('/servicos/:servico_id')

        // 3) Metodo: Selecionar por id: (acessar em: GET http://localhost:8000/api/servicos/:produtos_id)
        .get(function (req, res) {
            
            //Funcao para poder selecionar um determinado servico por id - ira verificar
            //se caso nao encontre um servico pelo id... retorna uma mensagem de error:
            
            
            Servico.findById(req.params.servico_id, function(error, servico) {
                if(error)
                    res.send('Id do servico nao encontrado....' + error);

                res.json(servico);
            });

        });
    
    })

    router.route('/servicos/:servico_id')
    // 4)Metodo: Atualizar por Id:(acessar em: PUT http://localhost:8000/api/servicos/:servico_id)
    .put(function(req, res) {

        //Primeiro:para atualizar, precisa achar o id do servico
        Servico.findById(req.params.servico_id, function(error, servico) {
            if(error)
            res.send("Id do servico nao encontrado....")
        

            //Segundo
            servico.preco = req.body.preco;
            servico.servicos = req.body.servicos;
        
            //Terceiro: Salvar as propriedades:
            servico.save(function(error) {
                if(error)
                    res.send('Error ao atualizar o servico...' + error);
                res.json({ message: 'Servico atualizado com sucesso!'})
            });

        });
    })
    router.route('/servicos/:servico_id')
    // 5) Excluir por Id (acessar: http://localhost:8000/api/servicos/:servico_id)
    .delete(function(req,res) {
        Servico.remove({
            _id: req.params.produto_id
            }, function(error) {
                if(error) 
                    res.send(" Id do produto nao encontrado..." + error);
                
                res.json({ message: 'Produto Excluido com Sucesso!'});
                
            });
    });



//Definindo um padrao das rotas prefixadas: '/api':
app.use('/api', router);

//Iniciando a Aplicacao (servidor):
app.listen(port);
console.log("Iniciando a app na porta" + port);


