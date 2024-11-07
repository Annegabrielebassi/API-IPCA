import express from 'express'
import { historicoIPCA, buscarUfPorId, buscarUfsPorNome } from './servicos/servico.js';

const app = express(); 

app.get('/historicoIPCA', (req, res)) => {
    const ano = parseInt(req.query.ano);

  app.get('/historicoIPCA/:id', (req, res) => {
    const id = parseInt(req.params.id);
  
    if (uf) {
      res.json(uf);
    } else if (isNaN(parseInt(req.params.id))) {
      res.status(400).send({ "erro": "Requisição inválida" });
    } else {
      res.status(404).send({ "erro": "UF não encontrada" });
    }
  });
  
  app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
  });
};
