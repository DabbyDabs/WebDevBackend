const express= require('express');
const server= express();
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.set('view engine','hbs');
let todoRoute= require('./routes/todos');
server.use('/todos',todoRoute);
server.set('views',__dirname+'/views');// server.set('views',__dirname+'/anything')if you have hbs stored in anything folder

server.listen(4444);