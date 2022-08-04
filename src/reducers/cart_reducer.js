import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload
    // return only those items whose id matches with the ones that have the same id + color - if it matches, it means that item is already in the cart, if it does not, we are adding a brand new item
    const tempItem = state.cart.find((i) => i.id === id + color)
    // if the item already exists and we are adding more of it(exact same color) then increase the amount only, nothing else
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount
          // checking against the stock amking sure that it does not go over
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max
          }
          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem
        }
      })

      return { ...state, cart: tempCart }
    }
    // if adding a new item
    else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }

  if (action.type === REMOVE_CART_ITEM) {
    // if it does not match, return it, since we did not click on it
    // if it matches, do not return it, because we just clicked on it
    const tempCart = state.cart.filter((item) => item.id !== action.payload)
    return { ...state, cart: tempCart }
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
