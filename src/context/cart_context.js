import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

// local storage setup
const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  // is there a "cart" in local storage?
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  }
  // if there is nothing in the cart return an empty array
  else {
    return []
  }
}

const initialState = {
  // initial state of the cart is linked to what local storage says
  // in case we have a returning customer that added products to his cart and left the page, his old items will be waiting for him in the cart upon returning
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  // reducer coming from cart_reducer
  const [state, dispatch] = useReducer(reducer, initialState)

  // add to cart
  // color is mainColor from AddToCart.js component
  const addToCart = (id, color, amount, product) => {
    // remember id:id === id - in payload ES6
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
  }

  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id })
  }

  const toggleAmount = (id, value) => {
    console.log(id, value)
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } })
  }

  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  useEffect(() => {
    // every time cart changes invoke COUNT_CART_TOTALS
    dispatch({ type: COUNT_CART_TOTALS })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
