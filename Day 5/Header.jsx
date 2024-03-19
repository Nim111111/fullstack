import { Link } from 'react-router-dom';
import React, { useState } from 'react'; // Import useState from React
import '../../assets/css/Header.css';
import logo from '../../assets/images/logo1.png';

function Header() {
    // State to track whether the dropdown is open or closed
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle the dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <div className="logo">
                        <img src={logo} alt="" className='logo-image'/>
                    </div>
                    
                    <ul className="nav-links">
                        <li>
                            <Link to="/user/home" className="nav-link" >Home</Link>
                        </li>
                        <li>
                            <Link to="/user/aboutus" className="nav-link">About</Link>
                        </li>
                        {/* Services dropdown */}
                        <li className="nav-item">
                            <a className="nav-link" id='nav-link2' style={{background:"#f1f1f1",color:""}}  onClick={toggleDropdown}>Services</a>
                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    <ul>
                                        <li style={{marginLeft:"10px"}}><Link to="/user/weddings" className="nav-link2">Weddings</Link></li>
                                        <li style={{marginLeft:"10px"}}><Link to="/user/nonprofit" className="nav-link2">Non-Profit</Link></li>
                                        <li style={{marginLeft:"10px"}}><Link to="/user/social" className="nav-link2">Social</Link></li>
                                        <li style={{marginLeft:"10px"}}><Link to="/user/destination" className="nav-link2">Destination</Link></li>
                                        <li style={{marginLeft:"10px"}}><Link to="/user/corporation" className="nav-link2">Corporate</Link></li>
                                        <li style={{marginLeft:"10px"}}><Link to="/user/consulting" className="nav-link2">Consulting</Link></li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        {/* End of Services dropdown */}
                        <li>
                            <Link to="/portfolio" className="nav-link">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/user/contact" className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                    
                </nav>
            </header>
        </>
    );
}

export default Header;
