//console.log('Hola mundo en el curso de GraphQL!!!')
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';

const app = express();

app.use(cors());

app.use(compression());

/*app.use('/', (req, res) => {
    res.send('Welcome to course GraphQL');
});*/

// app.use('/', graphqlHTTP({
//     schema,
//     graphiql: true
// }));

const server = new ApolloServer({
    schema,
    introspection: true
});

server.applyMiddleware({ app });

const PORT = 5300;
const httpServer = createServer(app);

httpServer.listen(
    { port: PORT},
    () => console.log('\x1b[35m%s\x1b[0m', `Hola Mundo API GraphQL http://localhost:${PORT}/graphql`));