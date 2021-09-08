import { ProxyState } from "../AppState.js";
import { Snacks } from "../Models/Snacks.js";

class SnacksService{
  addSnack() {
    ProxyState.snacks = [...ProxyState.snacks,new Snacks({title:'Nice snack'})]
  }
 
}

export const snacksService = new SnacksService();