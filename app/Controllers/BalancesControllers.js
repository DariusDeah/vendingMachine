import { ProxyState } from "../AppState.js";
import { balancesService } from '../Services/BalancesService.js';


function _drawMoney() {

  let balances =+ .25
 
 
  document.getElementById('money').innerHTML = balances.toString()
  console.log('add money works from b controller')

}
export class BalancesController{
  constructor() {
    ProxyState.on('money', _drawMoney);
    _drawMoney()
  }
  // addBalance() {
  //   balancesService.addBalance()
    
  // }
}