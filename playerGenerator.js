function playerGenerator(name, attack, defense) {
    
    return {
        name: name,
        attack: attack,
        defense: defense,
        hp: 100,
        displayMyPlayerInfo: function() {
            console.log("My name is " + this.name + ", I have " + this.attack + " attack, " + this.defense + " defense and " + this.hp + " health points.");
        }
    };
}

module.exports.playerGenerator = playerGenerator;