'use strick';

const restaurant = {
    name: 'classico Italiano',
    location: 'Via Angelo 23, Italy',
    categories: ['Italian', 'Pizzeria', 'Wegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },

    },

    oder: function (startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery: function ({ startIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },
};

const arr = [7, 8, 9];

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


