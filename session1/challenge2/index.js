const game = {
    team1: "Manchester United",
    team2: "Manchester City",
    player: [
        [
            'De Gea',
            'Dalot',
            'Varane',
            'Lisandro',
            'Shaw',
            'Casemiro',
            'Eriksen',
            'Bruno Fernaldes',
            'Antony',
            'Rashford',
            'Sancho',
        ],
        [
            'Ederson',
            'Akanji',
            'Walker',
            'Stones',
            'Cancelo',
            'Rodri',
            'Gundogan',
            'De Bruyner',
            'Foden',
            'Mahred',
            'Haaland',
        ],
    ],
    score: '4:0',
    scored: ["Rashford", 'Atony', 'Sancho', 'Rashford'],
    date: 'Nov 9th, 2025',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1
for (const [i, player] of game.scored.entries())
    console.log(`Goal ${i + 1}: ${player}`);

//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds)
    average += odd;
average /= odds.length;
console.log(average)

//3
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? ' draw ' : `Victory ${game[team]}`;
    console.log(team, odd);
}
