const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://thiago:910412680@cluster0-shard-00-00-lzv2m.mongodb.net:27017,cluster0-shard-00-01-lzv2m.mongodb.net:27017,cluster0-shard-00-02-lzv2m.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:
//
// Query Params: request.query (filtros, ordenação, paginação,...) Usa ?query=algo Método GET
// Route Params: request.params (identificar um recurso na alteração ou remoção) usa /id Método PUT ou DELETE
// Body: request.body (Dados para a criação ou alteração de um registro) Método PUT ou POST

// MongoDB (Não-relacional)

//05jBqUg4LxKaJFZB -> Senha MongoDB user: thiago
