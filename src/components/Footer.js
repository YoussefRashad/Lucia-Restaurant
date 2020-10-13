import React from 'react'
import { Link } from 'react-router-dom' 

export default function Footer() {
    
    return (
        <footer className="footer-distributed" style={{ backgroundColor: "black", color: "white", borderRadius: '5%' }}>

            <div className="footer-left">
                <h3>LUCIA's<span>Restaurant</span></h3>

                <p className="footer-links">
                    <Link to="/">Home</Link>
                    {" | "}
                    <Link to="/about">About</Link>
                    {" | "}
                    <Link to="/menu">Menu</Link>
                    {" | "}
                    <Link to="/contactUS">Contact</Link>
                </p>

                <p className="footer-company-name">© {new Date().getFullYear()} Created by Youssef Rashad.</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>15 El Tohed ST,</span>
						El Warraq, Giza, Egypt</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+20 112-672-8146</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:youssefrashad119@gmail.com">youssefrashad119@gmail.com</a></p>
                </div>
            </div>
            
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the company</span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus recusandae aut, consequatur nihil vero asperiores.
                    </p>
                <div className="footer-icons">
                    <a href="https://www.facebook.com/Youssef.Rashad19/" target="_blank" rel="noopener noreferrer" className="facebook"><i className="fa fa-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/youssef-rashad-92b597156/" target="_blank" rel="noopener noreferrer" className="linkedIn"><i className="icon fa fa-linkedin"></i></a>
                    <a href="https://github.com/YoussefRashad" target="_blank" rel="noopener noreferrer" className="github"><i className="icon fa fa-github"></i></a>
                    <a href="https://twitter.com/YoussefRashad19" target="_blank" rel="noopener noreferrer" className="twitter"><i className="icon fa fa-twitter"></i></a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="youtube"><i className="fa fa-youtube"></i></a>
                </div>
            </div>
            <div className="text-muted text-center mt-3">
                {new Date().toUTCString()}
            </div>
        </footer>
    )
}