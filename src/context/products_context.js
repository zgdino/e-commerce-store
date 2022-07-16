import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const initialState = {
  isSidebarOpen: false,
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  // setting up the useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    // importing actions on top from actions.js
    dispatch({ type: SIDEBAR_OPEN })
  }

  const closeSidebar = () => {
    // importing actions on top from actions.js
    dispatch({ type: SIDEBAR_CLOSE })
  }

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
