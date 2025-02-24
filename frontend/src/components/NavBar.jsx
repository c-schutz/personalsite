import './NavStyles.css';
import { useState, useEffect, useRef, useContext } from 'react';
import About from '../about/about';
import { NavLink } from "react-router-dom";

function NavBar() {
    const [isHidden, setIsHidden] = useState(true);
    const lastScrollY = useRef(0); //initially sets last scroll to 0

    const handleScroll = () => {//runs on each scroll
        const currentScrollY = window.scrollY; //set current scroll

        if (currentScrollY > lastScrollY.current || window.scrollY < 150) {//check scroll direction, if near top of page add scrollbar back
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }

        lastScrollY.current = currentScrollY <= 0 ? 0 : currentScrollY; //set the last scroll to the current scroll unless the current scroll is negative
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        //cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);//run once

    return (
        <>
            <nav className={`navigation ${isHidden ? 'intoScreen' : 'outScreen'}`}>
                <NavLink className='navlinks' to="/about">About</NavLink>
                <NavLink className='navlinks' to="/projects">Projects</NavLink>
                <NavLink className='navlinks' to="/contact">Contact</NavLink>
            </nav>
        </>
    );
}

export default NavBar;
