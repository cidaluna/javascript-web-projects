const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelectorAll('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');
  // console.log(items);

  let futureDate = new Date(2022,3,18,22,30,00); // month start in zero
 console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let month = futureDate.getMonth(); // get number
month = months[month]; // get the value in months array
//console.log(year);
//console.log(months[month]); // 5 is June, because month start in zero

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${mins}pm`;
