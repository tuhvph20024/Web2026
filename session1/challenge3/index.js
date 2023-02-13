const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow Card'],
    [69, 'Red Card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);
//2
gameEvents.delete(64);
//3
console.log(`An event happened, on average, every ${90 / gameEvents.size} minute`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minute`);
//4
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'Firs' : 'Second';
    console.log(`[${half} HALF ] ${min}: ${event}`);
}