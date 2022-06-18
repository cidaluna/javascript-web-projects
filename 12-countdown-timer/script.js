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

  let futureDate = new Date(2022,7,29,22,30,00); // month start in zero
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

// future time in miliseconds
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    console.log(t);
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // calculate 1 day values in ms
    const oneDay = 24*60*60*1000;
    console.log(oneDay);
    const oneHour = 60*60*1000;
    console.log(oneHour);
    const oneMinute = 60*1000;
    console.log(oneMinute);

    // calculate all values
    let days = t/oneDay;
    console.log(days);
    days = Math.floor(days);
    
    let hours = Math.floor((t % oneDay) / oneHour);
    console.log(hours);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values array
    const values = [days, hours, minutes, seconds];

    items.forEach(function(item, index){
        item.innerHTML = values[index];
    });

}

getRemainingTime();
