/*function Player(name, attack, defense) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = 100;
}

Player.prototype.displayMyPlayerInfo = function () {
    console.log("My name is " + this.name + ", I have " + this.attack + " attack, " + this.defense + " defense and " + this.hp + " health points.");
}

Player.prototype.fight = function (player2) {
    var player1Substract = this.getMyPlayerRatio(player2.defense),
        player2Substract = player2.getMyPlayerRatio(this.defense);

    this.hp = (player1Substract >= player2Substract) ? player2Substract * (this.hp / player1Substract) : 0;
    player2.hp = (this.hp) ? 0 : player1Substract * (player2.hp / player2Substract);

    if (this.hp) {
        this.displayMyPlayerInfo();
    } else {
        player2.displayMyPlayerInfo();
    }
};

Player.prototype.getMyPlayerRatio = function(number) {
    return this.attack - number;
}*/

class Player {
    constructor(name, attack, defense) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = 100;
    }

    get info() {
        return this.displayMyPlayerInfo();
    }

    displayMyPlayerInfo() {
        console.log("My name is " + this.name + ", I have " + this.attack + " attack, " + this.defense + " defense and " + this.hp + " health points.");
    }

    fight(player2) {
        var player1Substract = this.getMyPlayerRatio(player2.defense),
            player2Substract = player2.getMyPlayerRatio(this.defense);

        this.hp = (player1Substract >= player2Substract) ? player2Substract * (this.hp / player1Substract) : 0;
        player2.hp = (this.hp) ? 0 : player1Substract * (player2.hp / player2Substract);

        if (this.hp) {
            this.info;
        } else {
            player2.info;
        }
    }

    getMyPlayerRatio(number) {
        return this.attack - number;
    }
}

module.exports.Player = Player;