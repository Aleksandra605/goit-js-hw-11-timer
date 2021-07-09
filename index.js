// refs = {
//   btnStart: document.querySelector('[data-action="start"]'),
//   btnStop: document.querySelector('[data-action="stop"]'),
//   calendar: document.querySelector('.calendar'),
// };

class CountdownTimer {
  constructor({ selector, targetDate }) {
    (this.targetDate = targetDate), (this.selector = selector);
  }

  makeContent = setInterval(() => {
    let now = new Date().getTime();
    let t = this.targetDate - now;

    if (t >= 0) {
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((t % (1000 * 60)) / 1000);

      document.querySelector(`${this.selector} [data-value="days"]`).innerHTML =
        days;

      document.querySelector(
        `${this.selector} [data-value="hours"]`
      ).innerHTML = ('0' + hours).slice(-2);

      document.querySelector(`${this.selector} [data-value="mins"]`).innerHTML =
        ('0' + mins).slice(-2);

      document.querySelector(`${this.selector} [data-value="secs"]`).innerHTML =
        ('0' + secs).slice(-2);
    } else {
      document.querySelector('.timer').innerHTML =
        '<p class="notice">The countdown is over!</p>';
    }
  }, 1000);
}

let endDate = new Date('Aug 9, 2021 18:34:00').getTime();

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: endDate,
});
