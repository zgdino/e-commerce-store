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
  // CONDITIONALS
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price)
    maxPrice = Math.max(...maxPrice)

    return {
      ...state,
      // copying all the values from the payload, not referencing → this will be the deafult value
      all_products: [...action.payload],
      // setting it to be equal to all_products in the beginning because at this point program is loading the products OR user has just entered the page so we want to show all of the products without any filters on it. Later the filter will be applied on filter_products
      filtered_products: [...action.payload],
      // after defining what maxPrice is, asign its value to the state → every time website loads, max_price and initial price will be eqaul to maxPrice
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    }
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true }
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false }
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state
    let tempProducts = [...filtered_products]

    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price)
    }

    if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price)
    }

    if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => {
        // check localeCompare in docs
        return a.name.localeCompare(b.name)
      })
    }

    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => {
        // check localeCompare in docs
        return b.name.localeCompare(a.name)
      })
    }

    // END CONDITIONALS

    return { ...state, filtered_products: tempProducts }
  }

  if (action.type === UPDATE_FILTERS) {
    const {name, value} = action.payload
    // setting up the [name] dynamically - google/youtube "how to setup dynamic properties"
    return {...state, filters:{...state.filters, [name]: value}}    
  }

  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
