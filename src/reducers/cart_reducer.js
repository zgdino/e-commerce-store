import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const {id, color, amount, product} = action.payload
    // return only those items whose id matches with the ones that have the same id + color - if it matches, it means that item is already in the cart, if it does not, we are adding a brand new item
    const tempItem = state.cart.find((i) => i.id === id + color)
    if (tempItem) {

    }
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
      return {...state, cart:[...state.cart, newItem]}
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
