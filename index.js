var playerGenerator = require('./playerGenerator').playerGenerator;
var getMyPlayerRatio = require('./playerUtils').getMyPlayerRatio;

var player1 = playerGenerator("erwan", 22, 3),
    player2 = playerGenerator("roberto", 2, 10);

player1.displayMyPlayerInfo();
player2.displayMyPlayerInfo();

console.log(getMyPlayerRatio(player1, 20));