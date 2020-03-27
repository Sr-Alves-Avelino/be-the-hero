const express = require('express');
const cors = require('cors');
const routes = require('./routes'); 
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);


/*
* Rota | Recurso


* MÉTODOS HTTP:

* GET: BUSCAR UMA INFORMAÇÃO DO BACKEND
* POST: CRIAR UMA INFORMAÇÃO NO BACKEND
* PUT: ALTERAR UMA INFORMAÇÃO NO BACKEND
* DELETE: DELETAR UMA INFORMAÇÃO NO BACKEND


*TIPOS DE PARÂMETROS:

*QUERY PARAMS: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
*ROUTE PARAMS: Parâmetros utilizados para identificar recursos 
*REQUEST BODY: Corpo da requisção, utilizando para criar ou alterar recursos


*/
