import { Snacks } from "./Models/Snacks.js"
import { Balances } from "./Models/Balances.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
// import {Balances} from "./Models/Balances"

class AppState extends EventEmitter {
  /** @type {Snacks[]} */
  snacks = [new Snacks('Doritos','$'+ 12.75, 'https://m.media-amazon.com/images/I/71MQeIS7FAL._SL1500_.jpg'),
    new Snacks('Root Beer','$' +8.25, 'https://beverages2u.com/wp-content/uploads/2019/05/0007800080488_C.jpg'),
    new Snacks('Lay Of Air','$'+ 15.00, 'https://m.media-amazon.com/images/I/51+4EuSFCbL.jpg'),
    new Snacks('Overprice Beef Jerky','$'+ 30.00, 'https://cdn.shopify.com/s/files/1/0600/9145/products/10oz_Transparent_Layer_Pkg-ZS-Ft_06.16.20_1024x1024_52d8ab7b-cfe4-4c2e-aa30-ad7d8b3ca670_1024x.png?v=1595520465')
  ]
  balances = new Balances
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
