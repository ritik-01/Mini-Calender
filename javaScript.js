const language = navigator.language;
let date = new Date();

let dayNumber = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(language,{weekday:'long'});
let monthName = date.toLocaleString(language,{month:'long'});
let year = date.getFullYear()

document.getElementById('monthName').innerHTML = monthName;
document.getElementById('dayName').innerHTML = dayName;
document.getElementById('dayNumber').innerHTML = dayNumber;
document.getElementById('year').innerHTML = year;