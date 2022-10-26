
import {createWeekDaysNode,createDateNode,createDateTrs} from "./creator"

export function render(container){
 const oThead=document.createElement('thead');
 const oTBody=document.createElement('tbody');
 const weekDayNode=createWeekDaysNode();
 oTBody.className="my-calendar-body"
  return function (year,month){
    const dateTrs=createDateNode(year,month);
    dateTrs.forEach((tr)=>{
      oTBody.appendChild(tr)
    })
    oThead.appendChild(weekDayNode);
    container.appendChild(oThead);
    container.appendChild(oTBody)
    return container
  }


  
}

export function update(year, month) {
  oTBody = document.querySelector('.my-calendar-body');
  const dateTrs = createDateNode(year, month);
  oTBody.innerHTML = '';
  dateTrs.forEach((tr) => {
    oTBody.appendChild(tr)
  })

}