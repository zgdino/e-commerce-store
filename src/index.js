import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

//DOMAIN
// dev-oeebqrcp.us.auth0.com
// CLIENT ID
// MqcGvQWhKbgn3U11S776RhakAE15i93A

ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>,

  document.getElementById('root')
)
