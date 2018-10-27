import express from 'express';
import html from '../static/html';

export default (app: ReturnType<typeof express>) => {
  app.get('/', (req, res) => {
    console.log(req.accepts);
    res.send(html);
  });
}
