class Pokemon {
    constructor(nickname, gender, level, moveSet) {
      this.nickname = nickname; // string
      this.gender = gender; // string
      this.level = level; // number
      this.moveSet = moveSet; // array of strings
      this.type = null; // will be a string
    }
    
    attack() {
      let index = Math.floor(Math.random() * this.moveSet.length);
      return `${this.nickname}! Use ${this.moveSet[index]}!!`;
    }
  }
  
  module.exports = Pokemon;