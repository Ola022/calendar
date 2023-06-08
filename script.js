function createCalendar(year, month) {
    var date = new Date(year, month - 1, 1);
    var daysInMonth = new Date(year, month, 0).getDate();
    var firstDayOfWeek = date.getDay();

    var calendarContainer = document.getElementById('calendar');

    var table = document.createElement('table');
    var tableHead = document.createElement('thead');
    var headRow = document.createElement('tr');
    var monthYearCell = document.createElement('th');
    monthYearCell.setAttribute('colspan', '7');
    if (year == null || month == undefined) {
        monthYearCell.textContent = "Select both month and year";
    }
    else{
    monthYearCell.textContent = monthName(month) + ' ' + year;}

    headRow.appendChild(monthYearCell);
    tableHead.appendChild(headRow);
    table.appendChild(tableHead);

    var tableBody = document.createElement('tbody');
    var daysRow = document.createElement('tr');
    var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (var i = 0; i < daysOfWeek.length; i++) {
        var dayCell = document.createElement('th');
        dayCell.textContent = daysOfWeek[i];
        daysRow.appendChild(dayCell);
    }

    tableBody.appendChild(daysRow);

    var row = document.createElement('tr');

    for (var i = 0; i < firstDayOfWeek; i++) {
        var emptyCell = document.createElement('td');
        row.appendChild(emptyCell);
    }

    var dayCount = 1;

    for (var i = firstDayOfWeek; i < 7; i++) {
        var dayCell = document.createElement('td');
        dayCell.textContent = dayCount;
        row.appendChild(dayCell);
        dayCount++;
    }

    tableBody.appendChild(row);

    while (dayCount <= daysInMonth) {
        var newRow = document.createElement('tr');

        for (var i = 0; i < 7; i++) {
            if (dayCount > daysInMonth) {
                break;
            }

            var dayCell = document.createElement('td');
            dayCell.textContent = dayCount;
            newRow.appendChild(dayCell);
            dayCount++;
        }

        tableBody.appendChild(newRow);
    }

    table.appendChild(tableBody);
    calendarContainer.innerHTML = '';
    calendarContainer.appendChild(table);
}

function monthName(month) {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[month - 1];
}

function updateCalendar() {
    var year = parseInt(document.getElementById('year').value);
    var month = parseInt(document.getElementById('month').value);
    if (year != null || month != null) {
        createCalendar(year, month);
    }
}

document.getElementById('year').addEventListener('change', updateCalendar);
document.getElementById('month').addEventListener('change', updateCalendar);

var year = new Date().getFullYear();
var month = new Date().getMonth() + 1;
createCalendar(year, month);
