const daysNum = document.querySelector('.days-num');
const hoursNum = document.querySelector('.hours-num');
const minutesNum = document.querySelector('.minutes-num');

const daysTxt = document.querySelector('.days-txt');
const hoursTxt = document.querySelector('.hours-txt');
const minutesTxt = document.querySelector('.minutes-txt');

const day = Number(document.querySelector('#day').textContent);
const month = Number((document.querySelector('#month').textContent) - 1);

const html = document.querySelector('html');

let date = new Date(2023, month, day, 0, 0);

function initCounts() {
  let now = new Date();
  let gap = date - now;

  let days = Math.floor(gap / 1000 / 60 / 60 / 24);
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(gap / 1000 / 60) % 60;

  daysNum.innerText = (days < 10) ? `0${days}` : days;
  hoursNum.innerText = (hours < 10) ? `0${hours}` : hours;
  minutesNum.innerText = (minutes < 10) ? `0${minutes}` : minutes;

  const namesRu = {
    daysRu: {
      1: 'день',
      2: 'дня',
      3: 'дней',
    },
    hoursRu: {
      1: 'час',
      2: 'часа',
      3: 'часов',
    },
    minutesRu: {
      1: 'минута',
      2: 'минуты',
      3: 'минут',
    },
  };

  const namesEn = {
    daysEn: {
      1: 'day',
      2: 'days',
    },
    hoursEn: {
      1: 'hour',
      2: 'hours',
    },
    minutesEn: {
      1: 'minute',
      2: 'minutes',
    },
  };

  const sliceDay = String(days).slice(-1);
  if (html.lang === 'ru') {
    if (parseInt(sliceDay, 10) === 1 && (parseInt(days, 10) < 10 || parseInt(days, 10) > 20)) {
      daysTxt.innerText = namesRu['daysRu'][1];
    } else if ((parseInt(sliceDay, 10) === 2 || parseInt(sliceDay, 10) === 3 || parseInt(sliceDay, 10) === 4) && (parseInt(days, 10) < 10 || parseInt(days, 10) > 20)) {
      daysTxt.innerText = namesRu['daysRu'][2];
    } else {
      daysTxt.innerText = namesRu['daysRu'][3];
    }
  } else {
    if (parseInt(sliceDay, 10) === 1 && (parseInt(days, 10) < 10 || parseInt(days, 10) > 20)) {
      daysTxt.innerText = namesEn['daysEn'][1];
    } else {
      daysTxt.innerText = namesEn['daysEn'][2];
    }
  }

  const sliceHours = String(hours).slice(-1);
  if (html.lang === 'ru') {
    if (parseInt(sliceHours, 10) === 1 && (parseInt(hours, 10) < 10 || parseInt(hours, 10) > 20)) {
      hoursTxt.innerText = namesRu['hoursRu'][1];
    } else if ((parseInt(sliceHours, 10) === 2 || parseInt(sliceHours, 10) === 3 || parseInt(sliceHours, 10) === 4) && (parseInt(hours, 10) < 10 || parseInt(hours, 10) > 20)) {
      hoursTxt.innerText = namesRu['hoursRu'][2];
    } else {
      hoursTxt.innerText = namesRu['hoursRu'][3];
    }
  } else {
    if (parseInt(sliceHours, 10) === 1 && (parseInt(hours, 10) < 10 || parseInt(hours, 10) > 20)) {
      hoursTxt.innerText = namesEn['hoursEn'][1];
    } else {
      hoursTxt.innerText = namesEn['hoursEn'][2];
    }
  }

  const sliceMinutes = String(minutes).slice(-1);
  if (html.lang === 'ru') {
    if (parseInt(sliceMinutes, 10) === 1 && (parseInt(minutes, 10) < 10 || parseInt(minutes, 10) > 20)) {
      minutesTxt.innerText = namesRu['minutesRu'][1];
    } else if ((parseInt(sliceMinutes, 10) === 2 || parseInt(sliceMinutes, 10) === 3 || parseInt(sliceMinutes, 10) === 4) && (parseInt(minutes, 10) < 10 || parseInt(minutes, 10) > 20)) {
      minutesTxt.innerText = namesRu['minutesRu'][2];
    } else {
      minutesTxt.innerText = namesRu['minutesRu'][3];
    }
  } else {
    if (parseInt(sliceMinutes, 10) === 1 && (parseInt(minutes, 10) < 10 || parseInt(minutes, 10) > 20)) {
      minutesTxt.innerText = namesEn['minutesEn'][1];
    } else {
      minutesTxt.innerText = namesEn['minutesEn'][2];
    }
  }
}

const initTimer = () => {
  initCounts();
  setTimeout(initTimer, 3000);
};

export {initTimer};
