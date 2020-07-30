// const requestUrl = './runes.json'

// var request = new XMLHttpRequest();
// request.open('GET', requestUrl, false);
// request.responseType = 'json';
// request.send();

const runeList = JSON.parse(runes)

// request.onload = () => {
// let runes = request.response;

console.log(runes);

const refTable = document.getElementsByTagName('table');

const columnNames = Object.keys(runes[0])

runeList.forEach(rune => {
    row = refTable.insertRow()
    columnNames.forEach(columnName => {
        cell = row.insertCell()
        cell.innerHTML = rune[columnName]
        console.log(rune);
    })
});


// }