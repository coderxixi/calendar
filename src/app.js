import MyCalendar from "./compontent/Calendar";
; (() => {
  const myCalendar = MyCalendar();
  const oApp=document.querySelector('#app');
  const dateInfo=myCalendar.getDateInfo()
  const init = () => {
    render(...dateInfo)
  };

  function render(...args){
  
    oApp.appendChild(myCalendar.render(...args))
  }
  init()
})()