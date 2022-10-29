import {getDateInfo} from "./utils"
import {render,update} from "./render"
import event from "./event"
import './index.scss'
export default (handler)=>{

const oCoutainer=document.createElement('table');
oCoutainer.className="my-calendar"
event(oCoutainer,handler)
  return {
    render:render(oCoutainer),
    getDateInfo,
    update
  }
}