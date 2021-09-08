import { ProxyState } from "../AppState.js"
import { Balances } from "../Models/Balances.js"
import{BalancesController} from "../Controllers/BalancesControllers.js"
class BalancesService {
  addBalance() {
  
    ProxyState.balances = new Balances
  }
}
//singleton aka single pattern
export const balancesService = new BalancesService()