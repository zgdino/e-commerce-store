import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const initialState = {
  cart: [],
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

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
