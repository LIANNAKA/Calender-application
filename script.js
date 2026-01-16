function updateCalendar() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY","JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

    const month = monthNames[now.getMonth()];

    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;

}

updateCalendar();