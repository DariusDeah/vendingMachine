export class Balances{
  constructor(balanceAmount) {
    this.balanceAmount = balanceAmount;
  }
  get balanceTemplate() {
    return /*html*/`
    <span> <button class="btn bg-success" id="add-money-btn">+$</button>
   <h4 class="text-end">Balance: <span id="money">${this.balanceAmount}<span>$</span></span></h4>
   </span>`
  }
}