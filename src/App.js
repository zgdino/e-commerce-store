import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import styled from 'styled-components'

import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
} from './pages'

function App() {
  // Navbar, Sidebar, (something inbetween) and Footer are allways displayed no matter what → that is why they are out of the router
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        {/* route for SingleProducts is different - single-ing out specific product out of Products ... determined by :id; SingleProduct will have functionality to determine which product to be shown*/}
        <Route exact path='/products/:id' children={<SingleProduct />} />
        {/* Checkout component will eventually be wrapped in a PrivateRoute making sure that only logged in visitors have access */}
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
