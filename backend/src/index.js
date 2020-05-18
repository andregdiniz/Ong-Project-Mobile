/* Métodos HTTP:
*
*   GET: Buscar uma informação no Back-end
*   POST: Criar uma informação no Back-end
*   PUT: Alterar uma informação no Back-end
*   DELETE: Deleta uma informação no Back-end
*/

/* Tipos de parâmetros:
* 
* Query Params: Parâmetros nomeados e enviados na rota após "?" (Filtros, paginação)
* Route Params: Parâmetros utilizados para identificar os recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
*/

/*
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server.
* NoSQL : MongoDB, CouchDB, etc
*/

/*
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()
*/

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);