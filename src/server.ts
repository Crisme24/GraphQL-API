//console.log('Hola mundo en el curso de GraphQL!!!')
import express from 'express';
import compression from 'compression';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(compression());

app.use('/', (req, res) => {
    res.send('Welcome to course GraphQL');
});

const PORT = 5300;

app.listen(
    { port: PORT},
    () => console.log('\x1b[36m%s\x1b[0m', `Hola Mundo API GraphQL http://localhost:${PORT}`));