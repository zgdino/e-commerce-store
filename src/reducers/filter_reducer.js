import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      // copying all the values from the payload, not referencing → this will be the deafult value
      all_products: [...action.payload],
      // setting it to be equal to all_products in the beginning because at this point program is loading the products OR user has just entered the page so we want to show all of the products without any filters on it. Later the filter will be applied on filter_products
      filtered_products: [...action.payload],
    }
  }
  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
