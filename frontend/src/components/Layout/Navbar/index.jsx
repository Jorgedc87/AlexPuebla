import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '@/styles/components/Layout/Navbar.css'
import Button from "../Button";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Alex Photography
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu inactive'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sobre-mi" className="nav-links" onClick={closeMobileMenu}>Sobre Mi</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/galeria" className="nav-links" onClick={closeMobileMenu}>Galería</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tienda" className="nav-links" onClick={closeMobileMenu}>Tienda</Link>
                        </li>
                        <div className={button ? 'hidden' : 'mt-2'}>
                            {!button && <Button buttonSize={'btn--large'} buttonStyle='btn--outline' onClick={closeMobileMenu}>Contacto</Button>}
                        </div>
                    </ul>
                            {button && <Button buttonStyle='btn--outline'>Contacto</Button>}
                </div>
            </nav>
        </>
      );
}

export default Navbar;
