// تاريخ المهرجان: 13 أكتوبر 2025
var eventDate = new Date("Oct 13, 2025 18:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = eventDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown").innerHTML = "🎊 انطلق المهرجان!";
  }
}, 1000);
