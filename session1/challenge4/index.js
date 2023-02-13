document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    console.log(rows);

    for (const [i, row] of rows) {
        const [first, second] = row.toLowerCase().trin().split('_');
        console.log(row, first, second);
        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
})