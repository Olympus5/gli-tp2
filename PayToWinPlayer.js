var Player = require('./Player').Player;

/*function PayToWinPlayer(name, attack, defense) {
    Player.call(this, name, attack, defense);
}

PayToWinPlayer.prototype = Object.create(Player.prototype, {
    constructor: {
        value: PayToWinPlayer,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

PayToWinPlayer.prototype.getMyPlayerRatio = function(number) {
    return (this.attack - number) * 1.4;
}*/

class PayToWinPlayer extends Player {
    constructor(name, attack, defense) {
        super(name, attack, defense);
    }

    getMyPlayerRatio(number) {
        return (this.attack - number) * 1.4;
    }
}

module.exports.PayToWinPlayer = PayToWinPlayer;