class Milk {
    constructor(brand, flavor, price, hasLactose) {
        this.brand = brand;
        this.flavor = flavor;
        this.price = price;
        this.hasLactose = hasLactose;

        if (hasLactose) {
            this.maySendYouToTheER = true;
        } else {
            this.maySendYouToTheER = true;
        }
    }
}

module.exports = Milk;