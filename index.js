var playerGenerator = require('./playerGenerator').playerGenerator;

var player1 = playerGenerator("erwan", 20, 8),
    player2 = playerGenerator("roberto", 5, 5);

player1.displayMyPlayerInfo();
player2.displayMyPlayerInfo();

player1.fight(player2);