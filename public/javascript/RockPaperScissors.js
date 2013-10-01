function Player () {

}

Player.prototype.picks = function (pick) {
	this.pick = pick;
}

function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.winner = function() {
	var player1 = this.player1;
	var player2 = this.player2;

	if(player1.pick == player2.pick) { return [null, "draw"]; }

	var crazyHands = {
		'rock': {
			'scissors': 'crushes',
			'lizard': 'crushes'
		},
		'paper': {
			'rock': 'covers',
			'Spock': 'disproves'
		},
		'scissors': {
			'paper': 'cuts',
			'lizard': 'decapitates'
		},
		'Spock': {
			'scissors': 'smashes',
			'rock': 'vaporises'
		},
		'lizard': {
			'Spock': 'poisons',
			'paper': 'eats'
		}
	}

	if(Object.keys(crazyHands[player1.pick]).indexOf(player2.pick) >= 0) {
		message = player1.pick + ' ' + crazyHands[player1.pick][player2.pick] + ' ' + player2.pick;
		return [player1, message];
	} else {
		message = player2.pick + ' ' + crazyHands[player2.pick][player1.pick] + ' ' + player1.pick;
		return [player2, message];
	}
}
