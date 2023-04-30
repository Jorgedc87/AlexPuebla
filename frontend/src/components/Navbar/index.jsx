import { useState, useEffect } from "react";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 1024){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>

            </nav>
        </>
      );
}

export default Navbar;
