import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// pages
import About from './pages/About'
import Error from './pages/Error'
import Home from './pages/Home'
import Seat from './pages/Seat'
import Menu from './pages/Menu'
import SingleMenu from './pages/SingleMenu'
import Map from './pages/Map'
import ContactUS from './pages/ContactUS'
// Account - Authorization operation
import LogIn from './pages/Accounts/LogIn'
import SignUp from './pages/Accounts/SignUp'
// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// MenuComponent

export default function App() {
  return (
    <BrowserRouter>
      <Route component={Navbar}/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/menu/:name' component={SingleMenu} />
        <Route exact path='/map' component={Map} />
        <Route exact path='/login' component={LogIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/seat' component={Seat} />
        <Route exact path='/ContactUS' component={ContactUS} />
        <Route path='*' component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}