import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import indexEndpoints from './endpoints/index';

export const jsonBodyParser = bodyParser.json();
export const app = express();
indexEndpoints(app);
app.use('/static', express.static(path.join(__dirname, 'static')));
app.listen(process.env.PORT || '8080', () => console.log(`Listening... ${process.env.PORT}`));
