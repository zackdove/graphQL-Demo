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
    constructor(name, colour, radius, mass, composition, distance, period){
        this.name = name;
        this.colour = colour;
        this.radius = radius;
        this.mass = mass;
        this.composition = composition;
        this.distance = distance;
        this.period = period;
    }
    getDensity(){
        return (this.mass / ((4*Math.PI*Math.pow(this.radius, 3))/3))
    }
}

const mercury = new AstralBody('Mercury', 'grey', 0.4, 0.055, 'rocky', 0.4, 0.24);
var earth = new AstralBody('Earth', 'blue', 1, 1, 'rocky', 1, 1);
const venus = new AstralBody('Venus', 'white', 0.95, 0.815, 'rocky', 0.73, 0.615);
const mars = new AstralBody('Mars', 'red', 0.533, 0.107, 'rocky', 1.52, 1.88);
const jupiter = new AstralBody('Jupiter', 'orange', 11.2, 317.8, 'gas', 5.2, 11.86);

var saturn = new AstralBody('Saturn', 'yellow', 9.449, 95.15, 'gas', 9.58, 29.45);
const uranus = new AstralBody('Uranus', 'lightblue', 14.5, 4.007, 'ice', 19.2, 84);
const neptune = new AstralBody('Neptune', 'blue', 3.88, 17.14, 'ice', 30.07, 164.8);
var milkyWay = new SolarSystem('Miky Way', [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune])


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
