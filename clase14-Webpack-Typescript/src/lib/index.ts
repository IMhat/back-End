import express from 'express';
import {Persona} from './persona';

const persona = new Persona('Mateo', 'Mansillaa'),

const app = express();

app,get('/', (req, res) =>{
    res.send({
        persona: persona.obtenerNombreCompleto()
    })
})