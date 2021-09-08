export class Snacks{
  constructor(name,price,img) {
    this.name = name
    this.price = price
    this.img = img
  }
  
  get Template() {
    return `
    <div class="col">
 <div class="card" style="width: 18rem;">
  <img class="card-img-top img-fluid" src="${this.img}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${this.name}</h5>
    <p class="card-text">${this.price}</p>
    <button class="btn btn-card bg-primary text-light">Purchase</button>
  </div>
</div>
</div>
        `
}
}
