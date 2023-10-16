class Cereal {
    constructor(brand, ingredients, price, isTasty, isGoingToSendYouToTheER) {
      this.brand = brand; //string
      this.ingredients = ingredients; //array of strings
      this.price = price //number
      this.isTasty = isTasty //boolean
      this.isGoingToSendYouToTheER = isGoingToSendYouToTheER;
  
      // this.makeBowl = function(typeOfMilk) {
      //       return `Good morning! It's time for breakfast! Please enjoy a nice, big bowl of ${this.brand} cereal with ${typeOfMilk} poured all over it! It's absolutely delicious! No, I am not being held at gunpoint to say these lines. By the way, did you know that your cereal contains ${this.ingredients}? It's great! 🙂`;
      // }
  
  
    }
    
    makeBowl(typeOfMilk) {
      return `Good morning! It's time for breakfast! Please enjoy a nice, big bowl of ${this.brand} cereal with ${typeOfMilk} poured all over it! It's absolutely delicious! No, I am not being held at gunpoint to say these lines. By the way, did you know that your cereal contains ${this.ingredients}? It's great! 🙂`;
    }
  }
  
  module.exports = Cereal;