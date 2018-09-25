var getMyPlayerRatio = require('./playerUtils').getMyPlayerRatio;   

function playerGenerator(name, attack, defense) {
    
    return {
        name: name,
        attack: attack,
        defense: defense,
        hp: 100,
        displayMyPlayerInfo: function() {
            console.log("My name is " + this.name + ", I have " + this.attack + " attack, " + this.defense + " defense and " + this.hp + " health points.");
        },
        fight: function(player2) {
            var player1Substract = getMyPlayerRatio(this, player2.defense),
                player2Substract = getMyPlayerRatio(player2, this.defense);
        
            this.hp = (player1Substract >= player2Substract) ? player2Substract * (this.hp / player1Substract) : 0 ;
            player2.hp = (this.hp) ? 0 : player1Substract * (player2.hp / player2Substract) ;
        
            if(this.hp) {
                this.displayMyPlayerInfo();
            } else {
                player2.displayMyPlayerInfo();
            }
        }
    };
}

module.exports.playerGenerator = playerGenerator;