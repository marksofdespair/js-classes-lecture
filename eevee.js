const Pokemon = require("./pokemon.js");

class Eevee extends Pokemon {
  constructor(nickname, gender, level, moveSet) {
    super(nickname, gender, level, moveSet);
    
    this.type = "Normal";
    this.species = "Evolution Pokemon";
  }
}

module.exports = Eevee;