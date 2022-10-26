// 本月1号星期几
export function getFirstWeekDay(year, month) {
  //monthIndex 是从0开始
  const date = new Date(year, month - 1, 1);
  return date.getDate();
}

// 获取上个月有多少天
export function getMonthDayCount(year, month) {
  const date = new Date(year, month, 0)
  return date.getDate()
}

//获取上个月需要渲染多少天
export function getLastMonthRestDays(year, month) {
  // 获取本月的第一天是几号和星期几
  const days = getFirstWeekDay(year, month);
  //获取上个月的最后一天
  let lastDate = getMonthDayCount(year, month - 1);
  const restDays = [];
  while (restDays.length < days) {
    restDays.push(lastDate--)
  }

  return restDays.reverse()
}

//获取下个月要渲染多少天

export function getNextMonthRestDays(year, month) {
  //拿到上个月渲染的天数
  const lastMonthRestDaysCount = getLastMonthRestDays(year, month)
  //本月的天数
  const currentMonthDayCount = getMonthDayCount(year, month);
  //下个月的天数
  const nextMonthRestDayCount = 42 - (lastMonthRestDaysCount + currentMonthDayCount)
  let restDays = []
  for (let i = 1; i <= nextMonthRestDayCount; i++) {
    restDays.push(i)
  }
  return restDays;
}

//工具函数转换时间戳
export function getDateInfo(timeStamp){
  var date=  timeStamp? new Date(timeStamp):new Date();
  return [date.getFullYear(),date.getMonth()+1,date.getDate]

}

export function getFormatDate(year,month,date){
   const dateArr=[year,month,date];
   for(let i=1;i<dateArr.length;i++){
    dateArr[i]<10 &&(dateArr[i]='0'+dateArr[i]);
   }
   return dateArr.join('-')
}