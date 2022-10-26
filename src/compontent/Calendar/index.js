import {getDateInfo} from "./utils"
import {render,update} from "./render"
import event from "./event"
import './index.scss'
export default ()=>{

const oCoutainer=document.createElement('table');
oCoutainer.className="my-calendar"
event(oCoutainer)
  return {
    render:render(oCoutainer),
    getDateInfo,
    update
  }
}