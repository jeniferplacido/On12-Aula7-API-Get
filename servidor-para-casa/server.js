const { response, request } = require("express");
const express = require("express")

const app = express();

const estados = require("./data/estados-cidades.json")

app.get("/", (request,response) => {response.status(200).send('Tô Passada!')})


app.listen(3000, ()=>{console.log("Está rodando!!!!")} )



    app.get("/estados/todos",(request, response) =>{
        response.status(200).send(estados)
    } )

app.get("/estados/:sigla", (request, response)=> {
    const siglas = request.params.sigla
    console.log(siglas)
    response.status(200).send(estados.find(estado => estado.sigla == siglas))
})


