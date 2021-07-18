/********* CLOCK **********/

const hour = document.getElementById("clock-hour");
const minutes = document.getElementById("clock-minutes");
const seconds = document.getElementById("clock-seconds");

const clock = () => {
  let date = new Date();

  let hh = date.getHours() * 30;
  let mm = date.getMinutes() * 6;
  let ss = date.getSeconds() * 6;

  // Controls the rotation of the clock hands
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minutes.style.transform = `rotateZ(${mm}deg)`;
  seconds.style.transform = `rotateZ(${ss}deg)`;
};

setInterval(clock, 1000); // 1000 means 1s delay


/********* CLOCK & DATE TEXT **********/

const textHour = document.getElementById('text-hour'),
    textMinutes = document.getElementById('text-minutes'),
    textAMPM = document.getElementById('text-ampm'),
    dateDay = document.getElementById('date-day'),
    dateDay = document.getElementById('date-day'),
    dateMonth = document.getElementById('date-month'),
    dateYear = document.getElementById('date-year');

const clockText = () => {
    
}



