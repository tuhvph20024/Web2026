// code challenge
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
    }
}

//1
const [player1, player2] = game.player;
console.log(player1, player2);

//2
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//4
const playersFinal = [...player1, 'Bruno Fernaldes', 'Casemiro', 'Eriksen'];

//5
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

//6
const printGoal = function (...players) {
    console.log(players);
    console.log(`${players.length} bàn được ghi`);

};

// printGoal('Bruno Fernaldes', 'Rashford', 'Sancho', 'Antony');
// printGoal('Bruno Fernaldes', 'Rashford');
printGoal(...game.scored)
//7
team1 < team2 && console.log('Đội 1 có nhiều khả năng giành chiến thắng');
team1 > team2 && console.log('Đội 2 có nhiều khả năng giành chiến thắng');

// 'use strick';

// const restaurant = {
//     name: 'classico Italiano',
//     location: 'Via Angelo 23, Italy',
//     categories: ['Italian', 'Pizzeria', 'Wegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23,
//         },
//         sat: {
//             open: 0,
//             close: 24,
//         },

//     },

//     oder: function (startIndex, mainIndex) {
//         return [this.starterMenu[startIndex], this.mainMenu[mainIndex]]
//     },
//     orderDelivery: function ({ startIndex = 1, mainIndex = 0, time = '20:00', address }) {
//         console.log(
//             `Order received! ${ this.starterMenu[startIndex] } and ${ this.mainMenu[mainIndex] } will be delivered to ${ address } at ${ time }`
//         );
//     },

//     oderPasta: function (ing1, ing2, ing3) {
//         console.log(`Here is your declicious pasta with ${ ing1 }, ${ ing2 } and ${ ing3 } `);
//     }
// };

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);



// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnoci'];
// console.log(newMenu);
// //
// const str = 'Jonas';
// const letters = [...str, ' ', 'S '];
// console.log(letters);
// console.log(...str);

// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3")];

// console.log(ingredients);

// restaurant.oderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.oderPasta(...ingredients);
// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'SS, HaNoi :))',
//     mainIndex: 2,
//     startIndex: 2,
// });
// restaurant.orderDelivery({
//     address: 'SS, Hanoi',
//     startIndex: 1,
// });
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);
// // mutating vảiables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);
// // Netsed objects
// const {
//     fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);


// // Destructuring Arrays


// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.oder(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];

// const [i, , [j, k]] = nested;
// console.log(i, j, k);


