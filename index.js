const Eevee = require('./eevee.js');
const Cereal = require('./cereal.js');
const Milk = require('./milk.js');
const Dessert = require('./dessert.js');
const Meal = require('./meal.js');


/*let bananaCat = {
    name: "Bananya",
    species: "Banana Cat",
    specialTrait: "is very yellow",
    sound: function() {
        console.log("Nya");
    }
}

let appleDog = {
    name: "Heretic",
    species: "Apple Dog",
    specialTrait: "is very sour",
    sound: function() {
        console.log("Bark");
    }
}*/

//line breaking for clarity
let mondayBowl = new Cereal ("Cinnamon Toast Crunch",
[
    "Cinnamon",
    "Toast",
    "Sugar",
    "Crunch",
    "MSG"
], 8.95, true, false)

let mondayMilk = new Milk("Prairie Farms", "Whole Orange Shebert Nails", 42.00, true);

/*let noDessert = new Dessert();*/

let mondayDessert = new Dessert("Cheesecake");

let mondayMeal = new Meal("Dinner I Guess", mondayBowl, mondayMilk, mondayDessert);
console.log(mondayMeal.eatUp());
