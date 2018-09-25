var Player = require('./Player').Player;
var PayToWinPlayer = require('./PayToWinPlayer').PayToWinPlayer;

var player1 = new Player("erwan", 20, 8),
    player2 = new PayToWinPlayer("roberto", 19, 8);

player1.displayMyPlayerInfo();
player2.displayMyPlayerInfo();

player1.fight(player2);