
var today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;

const targetDate = new Date(nextMonthYear, nextMonth, 1, 0, 0, 0, 0);

var x = setInterval(function() {
 
  var now = new Date().getTime();
 
  var distance = targetDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 
