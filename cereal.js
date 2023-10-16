class Cereal {
    constructor(brand, ingredients, price, isTasty, isGoingToSendYouToTheER) {
      this.brand = brand; //string
      this.ingredients = ingredients; //array of strings
      this.price = price //number
      this.isTasty = isTasty //boolean
      this.isGoingToSendYouToTheER = isGoingToSendYouToTheER; //uh oh
    }
  }
  
  module.exports = Cereal;