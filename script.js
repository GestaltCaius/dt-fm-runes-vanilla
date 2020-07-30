const requestUrl = 'https://raw.githubusercontent.com/Zboubinours/dt-fm-runes-vanilla/master/runes.json'

var request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

// const runeList = JSON.parse(runes)

request.onload = () => {
    let runes = request.response;

    console.log(runes);

    const refTable = document.getElementById('table');

    const columnNames = Object.keys(runes[0])

    let thead = refTable.createTHead();
    let row = thead.insertRow();
    columnNames.forEach(columnName => {
        let th = document.createElement("th");
        th.className = 'col';
        let text = document.createTextNode(columnName);
        th.appendChild(text);
        row.appendChild(th);
    })


    var tableBody = document.getElementById('table').getElementsByTagName('tbody')[0];
    runes.forEach(rune => {
        let row = tableBody.insertRow()
        columnNames.forEach(columnName => {
            let cell = row.insertCell();
            // cell.className = 'row';
            cell.innerHTML = rune[columnName];
            console.log(rune);
        })
    });


}