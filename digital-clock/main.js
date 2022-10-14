window.onload = function () {
    setInterval(updateTime, 1000);
};

function updateTime() {
    // Time
    const hour = document.querySelector("#hour");
    const minute = document.querySelector("#minute");
    const second = document.querySelector("#second");
    let d = new Date();
    let currentHour = d.getHours();
    let currentMinute = d.getMinutes();
    let currentSecond = d.getSeconds();
    if (currentHour >= 0 && currentHour <= 9) {
        currentHour = "0" + currentHour;
    }
    if (currentMinute >= 0 && currentMinute <= 9) {
        currentMinute = "0" + currentMinute;
    }
    if (currentSecond >= 0 && currentSecond <= 9) {
        currentSecond = "0" + currentSecond;
    }
    hour.innerHTML = currentHour;
    minute.innerHTML = currentMinute;
    second.innerHTML = currentSecond;

    // Date
    const date = document.querySelector("#date");
    let currentDate = d.getDate();
    let currentMonth = d.getMonth() + 1;
    let currentYear = d.getFullYear();
    if (currentDate >= 0 && currentDate <= 9) {
        currentDate = "0" + currentDate;
    }
    if (currentMonth >= 0 && currentMonth <= 9) {
        currentMonth = "0" + currentMonth;
    }
    if (currentYear >= 0 && currentYear <= 9) {
        currentYear = "0" + currentYear;
    }
    date.innerHTML = `${currentDate}/${currentMonth}/${currentYear}`;

    // Day
    const day = document.querySelector("#day");
    let dayNumber = d.getDay(),
        currentDay = "";
    switch (dayNumber) {
        case 0:
            currentDay = "Sunday";
            break;
        case 1:
            currentDay = "Monday";
            break;
        case 2:
            currentDay = "Tuesday";
            break;
        case 3:
            currentDay = "Wednesday";
            break;
        case 4:
            currentDay = "Thursday";
            break;
        case 5:
            currentDay = "Friday";
            break;
        case 6:
            currentDay = "Saturday";
            break;
    }
    day.innerHTML = currentDay;
}