import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { TIME_OF_LOADING } from './utils/URL'
// pages
import About from './pages/About'
import Error from './pages/Error'
import Home from './pages/Home'
import Seat from './pages/Seat'
import Menu from './pages/Menu'
import SingleMenu from './pages/SingleMenu'
import SingleProduct from './pages/SingleProduct'
import Map from './pages/Map'
import ContactUS from './pages/ContactUS'
import MyProfile from './pages/MyProfile'
// Account - Authorization operation
import Login from './pages/Accounts/LogIn'
// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollButton from './components/ScrollButton'
import { UserContext } from './Context/User'

import Alert from './components/Alert'
import LoadingImg from './assets/restaurant.png';

export default function App() {
  const { alert } = React.useContext(UserContext)
  
  const [loading, setLoading] = React.useState(true) //// i will change to admin loading
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, TIME_OF_LOADING);
  }, [])

  if (loading) {
    return (
      <div className="loadscreen loading">
        <div className="loader">
          <img src={LoadingImg} className="logo mb-3 d-block" alt="loading" />
          <div className="text-center mt-5">
            {
              [...new Array(7)].map((item, index) =>
                  <div className="spinner-grow text-success mr-3" key={index} />)
            }
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <BrowserRouter>
      <Navbar />
      {alert.show && <Alert />}
      <ScrollButton />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path="/myProfile" component={MyProfile} />
        <Route exact path='/menu/:category' component={SingleMenu} />
        <Route exact path='/menu/:category/:id' component={SingleProduct} />
        <Route exact path='/map' component={Map} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/seat' component={Seat} />
        <Route exact path='/contactUS' component={ContactUS} />
        <Route path='*' component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
