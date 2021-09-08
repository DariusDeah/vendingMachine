import { ProxyState } from "../AppState.js";
import{snacksService} from "../Services/SnacksService.js"
// private
function _drawSnacks() {
  let snacks = ProxyState.snacks;
  let template = '';
  console.log('draw snacks running goood')
  snacks.forEach(s => template += s.Template)
     document.getElementById("app").innerHTML = /*html*/`
   <div class="card-columns  ">
       ${template}
   </div>
   `
}

// public
export class SnacksController{
  constructor() {
    ProxyState.on('snacks', _drawSnacks);
    _drawSnacks()
  }
  addSnacks() {
    snacksService.addSnack()
  }
}