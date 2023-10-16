const Cereal = require('./cereal.js');
const Milk = require('./milk.js');
const Dessert = require('./dessert.js');

class Meal {
    constructor(name, cereal, milk, dessert) {
        this.name = name;
        this.cereal = cereal;
        this.milk = milk;
        this.dessert = dessert;
    }

    eatUp() {
        return `Good morning! It's time for the most important meal of the day: ${this.name}! Please enjoy a nice, big bowl of ${this.cereal.brand} cereal with ${this.milk.flavor} flavored milk poured all over it! It's absolutely delicious! No, I am not being held at gunpoint to say these lines. By the way, did you know that your cereal contains ${this.cereal.ingredients.join(", ")}? It's great! If you've still got room in your tummy, enjoy a nice bite of ${this.dessert.type}. Have a wonderful day. 🙂`;
      }
}

module.exports = Meal;