import React from "react";
import './typestyles.css'
import { useRef, useEffect, useState } from "react";

function Types() {
    const introRef = useRef(null);

    const [scrollPosition, setScrollPosition] = useState(0); //scroll position will equate to viewport height

    useEffect(() => { //create event listener
        window.addEventListener('scroll', handleScroll);

        //cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };
    useEffect(() => {
        if (introRef.current) {
            const hrect = introRef.current.getBoundingClientRect();//y value is top of bounding box
            introRef.current.style.color = "black";
            //console.log(hrect.y); the higher up the element is on the screen the closer this value is to 0, it goes negative once off the top of the screen
            const hFromTop = (hrect.bottom - hrect.top) / 2 + hrect.top;
            const viewH = window.innerHeight;
            const appearanceRange = viewH/2.5;//change this for how much of the viewport you want the trigger to occur under
            const aRangeBottom = scrollPosition + appearanceRange;
            const aRangeTop = scrollPosition - appearanceRange;
            console.log("top: " + aRangeTop);
            console.log("bottom: " + aRangeBottom);
            console.log("hTop: " + hFromTop);
            if (hFromTop <= aRangeBottom && hFromTop >= aRangeTop) {
                //add fadeIn
                introRef.current.style.animation = "textFadeIn .5s forwards";
            } else {
                //addFadeOut
                introRef.current.style.animation = "textFadeOut .5s forwards";
            }
        }
    }, [scrollPosition]);

    return (
        <>
            <p ref={introRef} className="intro">Hello, this is my website!</p>
            <p className='size'>Bottom</p>
        </>
    );
}

export default Types;