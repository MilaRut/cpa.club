const daysNum = document.querySelector('.days-num');
const hoursNum = document.querySelector('.hours-num');
const minutesNum = document.querySelector('.minutes-num');

const daysTxt = document.querySelector('.days-txt');
const hoursTxt = document.querySelector('.hours-txt');
const minutesTxt = document.querySelector('.minutes-txt');

let date = new Date(2023, 0, 20, 0, 0);

function initCounts() {
  let now = new Date();
  let gap = date - now;

  let days = Math.floor(gap / 1000 / 60 / 60 / 24);
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(gap / 1000 / 60) % 60;

  daysNum.innerText = (days < 10) ? `0${days}` : days;
  hoursNum.innerText = (hours < 10) ? `0${hours}` : hours;
  minutesNum.innerText = (minutes < 10) ? `0${minutes}` : minutes;

  const names = {
    days: {
      1: 'день',
      2: 'дня',
      3: 'дней',
    },
    hours: {
      1: 'час',
      2: 'часа',
      3: 'часов',
    },
    minutes: {
      1: 'минута',
      2: 'минуты',
      3: 'минут',
    },
  };

  const sliceDay = String(days).slice(-1);
  if (parseInt(sliceDay, 10) === 1 && (parseInt(days, 10) < 10 || parseInt(days, 10) > 20)) {
    daysTxt.innerText = names['days'][1];
  } else if ((parseInt(sliceDay, 10) === 2 || parseInt(sliceDay, 10) === 3 || parseInt(sliceDay, 10) === 4) && (parseInt(days, 10) < 10 || parseInt(days, 10) > 20)) {
    daysTxt.innerText = names['days'][2];
  } else {
    daysTxt.innerText = names['days'][3];
  }

  const sliceHours = String(hours).slice(-1);
  if (parseInt(sliceHours, 10) === 1 && (parseInt(hours, 10) < 10 || parseInt(hours, 10) > 20)) {
    hoursTxt.innerText = names['hours'][1];
  } else if ((parseInt(sliceHours, 10) === 2 || parseInt(sliceHours, 10) === 3 || parseInt(sliceHours, 10) === 4) && (parseInt(hours, 10) < 10 || parseInt(hours, 10) > 20)) {
    hoursTxt.innerText = names['hours'][2];
  } else {
    hoursTxt.innerText = names['hours'][3];
  }

  const sliceMinutes = String(minutes).slice(-1);
  if (parseInt(sliceMinutes, 10) === 1 && (parseInt(minutes, 10) < 10 || parseInt(minutes, 10) > 20)) {
    minutesTxt.innerText = names['minutes'][1];
  } else if ((parseInt(sliceMinutes, 10) === 2 || parseInt(sliceMinutes, 10) === 3 || parseInt(sliceMinutes, 10) === 4) && (parseInt(minutes, 10) < 10 || parseInt(minutes, 10) > 20)) {
    minutesTxt.innerText = names['minutes'][2];
  } else {
    minutesTxt.innerText = names['minutes'][3];
  }
}

const initTimer = () => {
  initCounts();
  setTimeout(initTimer, 3000);
};

export {initTimer};
