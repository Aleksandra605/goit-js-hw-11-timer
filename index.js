function getTimeRemaining(endtime) {
  var time = Date.parse(endtime) - Date.parse(new Date());
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  return {
    total: time,
    days: days,
    hours: hours,
    minutes: mins,
    seconds: secs,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = document.querySelector('span[data-value="days"]');
  var hoursSpan = document.querySelector('span[data-value="hours"]');
  var minutesSpan = document.querySelector('span[data-value="mins"]');
  var secondsSpan = document.querySelector('span[data-value="secs"]');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);
