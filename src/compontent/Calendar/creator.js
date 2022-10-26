import { WEEK_DAYS } from "./config"
import { getLastMonthRestDays, getMonthDayCount, getDateInfo, getNextMonthRestDays } from "./utils"

export function createWeekDaysNode() {
  const oTr = document.createElement('tr');
  oTr.className = 'week-day'//添加类名
  oTr.innerHTML = WEEK_DAYS.map((item) => {
    return `<th>${item}</th>`
  }).join('')

  return oTr
}

export function createDateNode(year, month) {
  const lastMothRestDays = getLastMonthRestDays(year, month);
  const currentMonthDayCount = getMonthDayCount(year, month);
  const nextMonthRestDayCount = getNextMonthRestDays(year, month);
  const dateTrArr = createDateTrs(6);
  const lastMonthRestDaysTd = createRestDaysTds(lastMothRestDays)
  const currentMonthDaysTd = creatCurrentDaysTd(currentMonthDayCount, year, month)
  const nextMonthRestDaysTd = createRestDaysTds(nextMonthRestDayCount);

  const tdArr = [
    ...lastMonthRestDaysTd,
    ...currentMonthDaysTd,
    ...nextMonthRestDaysTd
  ]
  let index = 0;
  dateTrArr.forEach((item) => {
    for (let i = 0; i < 7; i++) {
      item.appendChild(tdArr[index]);
      index++
    }
  })
  return dateTrArr
}

//创建tr

export function createDateTrs(count) {
  const trArr = [];
  for (let i = 0; i < count; i++) {
    const oTr = document.createElement('tr');
    trArr.push(oTr);
  }
  return trArr
}


function createRestDaysTds(restDays) {
  return restDays.map((item) => {
    const oTd = document.createElement('td');
    oTd.className = 'day rest-day'
    oTd.innerText = item;
    return oTd
  })

}

function creatCurrentDaysTd(currenDayCount, year, month) {

  let trArr = [];
  const [currentYear, currentMonth, currenDay] = getDateInfo(year, month);

  console.log(currentYear, currentMonth, currenDay);
  for (let i = 1; i <= currenDayCount; i++) {
    const oTd = document.createElement('td');
    if (currentYear == year && currentMonth == month && currenDay == i) {
      oTd.className = 'day current-day current';
    } else {
      oTd.className = 'day current-day';
    }
    oTd.innerText = i
    trArr.push(oTd)
  }

  return trArr
}