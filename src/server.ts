//console.log('Hola mundo en el curso de GraphQL!!!')
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();

app.use(cors());

app.use(compression());

/*app.use('/', (req, res) => {
    res.send('Welcome to course GraphQL');
});*/

app.use('/', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = 5300;

app.listen(
    { port: PORT},
    () => console.log('\x1b[35m%s\x1b[0m', `Hola Mundo API GraphQL http://localhost:${PORT}/graphql`));