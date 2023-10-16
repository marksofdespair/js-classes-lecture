class Dessert {
    constructor(type) {
        this.type = type;
        if (!type) {
            throw Error("You did NOT just make a flavorless dessert... Try again.");
        }
    }
}

module.exports = Dessert;