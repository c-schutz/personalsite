import './NavStyles.css';
import { useState, useEffect, useRef, useContext } from 'react';
import { Context } from './App'; // Import the context

function NavBar() {
    const [isHidden, setIsHidden] = useState(false);
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
                <a className='navlinks' href="#">About</a>
                <a className='navlinks' href="#">Projects</a>
                <a className='navlinks' href="#">Contact</a>
            </nav>
            <p>Nam sit amet ultricies erat. Pellentesque vestibulum, quam vitae euismod sagittis, sapien libero viverra lectus, in tristique nisi urna id enim...</p>
            <p>Fusce in velit sapien. Nullam auctor risus id elit eleifend...</p>
            <p>Etiam luctus leo at viverra porttitor...</p>
            <p>Curabitur id arcu non nunc feugiat auctor at eget sapien...</p>
            <p>Proin tincidunt posuere libero, et scelerisque nunc...</p>
        </>
    );
}

export default NavBar;
