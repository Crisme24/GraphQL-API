//console.log('Hola mundo en el curso de GraphQL!!!')
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { IResolvers, makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.use(cors());

app.use(compression());

const typeDefs = `
    type Query {
        hola: String!
        holaConNombre(nombre: String!): String!
        holaAlCursoGraphQL: String!
    }
`;

const resolvers: IResolvers = {
    Query: {
        hola(): string {
            return 'Hola mundo';
        },
        holaConNombre(__: void, { nombre } ): string {
            return `Hola mundo ${nombre}`;
        },
        holaAlCursoGraphQL(): string {
            return 'Hola mundo al curso de GraphQL';
        }
    }
};

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})

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
    () => console.log('\x1b[36m%s\x1b[0m', `Hola Mundo API GraphQL http://localhost:${PORT}/graphql`));