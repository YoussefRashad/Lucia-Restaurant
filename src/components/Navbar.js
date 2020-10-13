import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRestaurantConsumer } from '../Context'

import Logo from '../assets/restaurant.png';
import defaultAvatar from '../assets/default-avatar.jpeg'


const Navbar = ( props ) => {
  
  const [PATH, setPATH] = useState(props.location.pathname.toLowerCase())
  const [isUser, setIsUser] = useState(props.context.isUser)
  
  const profileImg = props.context.userInfo.avatar ? 
                    `data:image/jpg;base64,${props.context.userInfo.avatar}` : defaultAvatar

  setTimeout(()=>{
    setIsUser(props.context.isUser)
    console.log("Context2 == props, isUser ? >> ", props.context.isUser);
  },1)


  useEffect(() => {
    setPATH(props.location.pathname.toLowerCase())
  }, [props.location.pathname])

  const avatarStyle = {
    height: '100px',
    width: '100px',
    borderRadius: '50%'
  }
  
  // const PATH = props.location.pathname.toLowerCase ();
  const matchedMenu = PATH.includes('/menu/')
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <Link to="/" style={{cursor: 'auto', marginRight: '10px'}}>
        <img src={Logo} width="150" height="100" alt="Restaurant Logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              className={`nav-link ${PATH === '/home' || PATH === '/' ? 'active' : ''}`}
              to='/'
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${PATH === '/about' ? 'active' : ''}`}
              to="/about"
            >
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${PATH === '/menu' ? 'active' : ''}`}
              to="/menu"
            >
              Menu
            </Link>
          </li>

          <li
            className={`nav-item dropdown ${matchedMenu ? 'active' : ''}`} >
            <nav
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Menu List
            </nav>

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link
                className={`dropdown-item ${PATH === '/menu/beef' ? 'active' : ''}`}
                to="/menu/beef"
              >
                Beef
              </Link>

              <div className="dropdown-divider" />

              <Link
                className={`dropdown-item ${PATH === '/menu/chicken' ? 'active' : ''}`}
                to="/menu/chicken"
              >
                Chicken
              </Link>

              <div className="dropdown-divider" />

              <Link
                className={`dropdown-item ${PATH === '/menu/dessert' ? 'active' : ''}`}
                to="/menu/dessert"
              >
                Dessert
              </Link>
              
              <div className="dropdown-divider" />

              <Link
                className={`dropdown-item ${PATH === '/menu/juices' ? 'active' : ''}`}
                to="/menu/juices"
              >
                Juices
              </Link>
              
              <div className="dropdown-divider" />

              <Link
                className={`dropdown-item ${PATH === '/menu/appetizers' ? 'active' : ''}`}
                to="/menu/appetizers"
              >
                Appetizers
              </Link>
              
              <div className="dropdown-divider" />

              <Link
                className={`dropdown-item ${PATH === '/menu/extra' ? 'active' : ''}`}
                to="/menu/extra"
              >
                Extra
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${PATH === '/contactus' ? 'active' : ''}`}
              to="/contactUS"
            >
              ContactUS
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${PATH === '/map' ? 'active' : ''}`}
              to="/map"
            >
              Map
            </Link>
          </li>

        </ul>
        

        {/* Login, signup, Seat, Logout */}
        <div className="form-inline my-2 my-lg-0">
          
          {/* Avatar */}
          {
            isUser ? 
                <div className="mr-3">
                  <img src={profileImg} style={avatarStyle} alt="My Avatar" />
                </div>
            : ''
          }

          {/* Login */}
          {
            isUser ? '':
          <Link
            className={`btn btn-outline-success m-1 my-sm-0 ${PATH === '/login' ? 'active' : ''} `}
            type="submit"
            to="/login"
          >
            Log In
          </Link>
          }


          {/* signup */}

          {
            isUser ? '':
            <Link
            className={`btn btn-outline-success m-1 my-sm-0 ${PATH === '/signup' ? 'active' : ''} `}
            type="submit"
            to="/signup"
          >
            Sign Up
          </Link>
          }
          
          {/* seat reservation */}
          {
            isUser ? 
            <Link
              className={`btn btn-outline-success m-1 my-sm-0 ${PATH === '/seat' ? 'active' : ''} `}
              type="submit"
              to="/seat"
            >
              Seat Reservation
            </Link>
            : ''
          }

          {/* Logout */}
          {
            isUser ? 
          <button
            className={`btn btn-danger m-1 my-sm-0 ${PATH === '/logout' ? 'active' : ''} `}
            type="submit"
            onClick={props.context.Logout}
          >
            Log out
          </button>
            : ''
          }

        </div>
      </div>
          
    </nav>
  );
};


export default withRestaurantConsumer(Navbar)