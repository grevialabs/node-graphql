var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        hello : String
    }
`);

var root = {
    hello: () => {
        return 'Hello world from grevialabs';
    }
}

var app = express();
var portno = 4000;
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(portno);
console.log('Graphql Express run on port: ' + portno );