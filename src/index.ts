import express from 'express';
import cors from 'cors';
import petshopRouter from './routes/petshopRoutes';
import petRouter from './routes/petRoutes';
require('dotenv').config();

const app = express();

//habilitando o cors (cross-origin resoucer sharing)
app.use(cors())
//middlewere responsável pelo tratamento do corpo das requisições
app.use(express.json());

//rotas
app.use('/petshop', petshopRouter);
app.use('/pets', petRouter)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`server listening in http://localhost:${process.env.SERVER_PORT}`)
})