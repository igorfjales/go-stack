import express from 'express';
import { teste } from './routes';

const app = express();

app.get('/', teste);


app.listen(3333);