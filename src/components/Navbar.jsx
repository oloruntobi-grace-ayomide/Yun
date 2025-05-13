import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/yun_logo.png'


function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

  useEffect(() => {

    // Function to close menu when clicking outside
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const nav = document.getElementById('navbar-container');
  
    const handleScroll = () => {
      if (window.scrollY > 60) {
        if (!nav.classList.contains('sticky')) {
          nav.classList.add('sticky');
        }
      } else {
        nav.classList.remove('sticky');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

    return(
          
        <nav ref={navRef} className="navbar-container parent" id="navbar-container">

            <div className="nav-logo-toggler flex items-center justify-between">

                <NavLink to="/" className='logo'>
                    <img src={Logo} alt="company's logo"/>
                </NavLink>

                <button
                className="burger-toggler focus:outline-none md:hidden"
                aria-label="Toggle navigation"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}> 
                    {isOpen ? "✖" : "☰"} 
                </button>

            </div>
           
            <ul className={`nav-links-container flex md:justify-evenly md:items-center bg-[#ffffff] ${isOpen ? "nav-open" : ""}` }>

                <li>
                    <NavLink to="/" className={({ isActive }) => isActive && window.location.hash === '' ? "nav-links active" : "nav-links"} end >Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/about-us" className={({ isActive }) => isActive && window.location.hash === '' ? "nav-links active" : "nav-links"} end>About Us
                    </NavLink>
                </li>

                
                <li>
                    <NavLink to="/#services"  
                    className={({ isActive }) => { const isHashActive = window.location.hash === '# services'; return isActive && isHashActive ? "nav-links active" : "nav-links";}}>Services
                    </NavLink>
                </li>
               
                <li>
                    <NavLink to="/purpose-driven-investment" className={({ isActive }) => isActive && window.location.hash === '' ? "nav-links active" : "nav-links"} end>Purpose-Driven Investment
                    </NavLink>
                </li>


                <li>
                  <NavLink to="/contact-us" className={({ isActive }) => isActive && window.location.hash === '' ? "nav-links active" : "nav-links"} end>Contact Us
                  </NavLink>
                </li>


            </ul>  
           
        </nav>
          
    )
}


export default Navbar;