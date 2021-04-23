const express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    // res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    res.send({ express: "hey you " +Math.floor(Math.random()*50) });
});

var schema = buildSchema(`
    type Query {
        solarSystem(name: String!): SolarSystem!
    }
    type SolarSystem {
        name: String
        astralBodies: [AstralBody!]!
    }
    type AstralBody {
        name: String!
        colour: String!
        radius: Float!
        mass: Float!
        composition: String!
        getDensity: Float!
    }
    `
);

class SolarSystem {
    constructor(name, astralBodies = []){
        this.name = name;
        this.astralBodies = astralBodies;
    }
    getAstralBodies(){
        return this.astralBodies;
    }
}
class AstralBody {
    constructor(name, colour, radius, mass, composition){
        this.name = name;
        this.colour = colour;
        this.radius = radius;
        this.mass = mass;
        this.composition = composition;
    }
    getDensity(){
        return (this.mass / ((4*Math.PI*Math.pow(this.radius, 3))/3))
    }
}

var earth = new AstralBody('Earth', 'blue', 3, 7, 'rocky')
var saturn = new AstralBody('Saturn', 'yellow', 6, 12, 'gas')
var milkyWay = new SolarSystem('Miky Way', [earth, saturn])


var coruascant  = new AstralBody('Coruascant', 'blue', 3, 7, 'rocky')
var coruascantSystem = new SolarSystem('Coruascant', [coruascant])
console.log(milkyWay)

var root = {
    solarSystem: (args) => {
        console.log(args)
        if (args.name === "milkyway"){
            return milkyWay;
        } else {
            return coruascantSystem;
        }
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
