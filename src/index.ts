import express from 'express';
import Hello from './hello';

const app = express();

app.get('/', Hello);

app.listen(3333);