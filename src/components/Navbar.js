import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { UserContext } from '../Context/User'
import Logo from '../assets/restaurant.png';
import defaultAvatar from '../assets/default-avatar.jpeg'

const Navbar = () => {
  const active  = useLocation().pathname
  const history = useHistory()
  const {isUser, logout, user} = React.useContext(UserContext)

  const NavItems = [
    {
      title: 'Home',
      to: '/'
    },
    {
      title: 'About',
      to: '/about'
    },
    {
      title: 'Menu',
      to: '/menu'
    },
    {
      title: 'Menu List',
      dropdown: ['beef', 'chicken', 'dessert', 'juices', 'appetizers', 'extra']
    },
    {
      title: 'ContactUS',
      to: '/contactUS'
    },
    {
      title: 'Map',
      to: '/map'
    }
  ]

  const avatarStyle = {
    height: '100px',
    width: '100px',
    borderRadius: '50%'
  }
  
  const dropDown = (item, key)=>{
    return (
      <li
        className={`nav-item dropdown ${active.includes('/menu/') ? 'active' : ''}`} 
        key={key}
      >
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
        {
          item.dropdown.map((dropdownItem, index) => {
            return (
              <span key={index}>
                <Link
                  className={(active === `/menu/${dropdownItem}` ? 'active ' : '') + 'dropdown-item text-capitalize'}
                  to={`/menu/${dropdownItem}`}
                >
                  {dropdownItem}
                </Link>
                {
                  dropdownItem !== 'extra' && <div className="dropdown-divider" />
                }
              </span>
            )
          })
        }
        </div>
      </li>
    )
  }
  
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
          
          {
            NavItems.map((item, index)=>{
              if (item.title ==='Menu List'){
                return dropDown(item, index)
              }
              return (
                <li className="nav-item" key={index}>
                  <Link
                    className={(active === item.to ? 'active ' : '') + 'nav-link'}
                    to={item.to}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
        

        {/* Login, signup, Seat, Logout */}
        <div className="form-inline my-2 my-lg-0">
          
          {/* Avatar */}
          {
            isUser ? 
                <Link className="mr-3" to="/myProfile">
                  <img src={defaultAvatar || user.avatar} style={avatarStyle} alt="My Profile" />
                </Link>
            : ''
          }

          {/* signup */}
          {
            isUser ? '':
            <Link
              className={`btn btn-outline-success m-1 my-sm-0 ${active === '/login' ? 'active' : ''} `}
              type="submit"
              to="/login"
            >
            login
          </Link>
          }
          
          {/* seat reservation */}
          <Link
            className={`btn btn-outline-success m-1 my-sm-0 ${active === '/seat' ? 'active' : ''} `}
            type="submit"
            to="/seat"
          >
            Seat Reservation
          </Link>

          {/* Logout */}
          {
            isUser ? 
          <button
            className={`btn btn-danger m-1 my-sm-0 ${active === '/logout' ? 'active' : ''} `}
            type="submit"
            onClick={()=>{
              logout()
              history.push("/")
            }}
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


export default Navbar