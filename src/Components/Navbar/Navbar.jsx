import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import pic from "./logo.png"
import "./Navbar.css";

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav"); 
      };
  return (
    <header>
          <img src={pic} alt="logo" className="logo" />
      <nav ref={navRef}>
        <a href="http://" target="_blank" rel="noopener noreferrer" className="active at">
          Home
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer" className="at">
          About
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer" className="at">
          Sponsors
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer"className="at">
          Donate
              </a>
              <button onClick={showNavbar} className="nav-btn nav-close-btn">
        <FaTimes />
      </button>
      </nav>

          <button onClick={showNavbar }  className="nav-btn" id="btn">
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
