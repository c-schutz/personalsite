import React from "react";
import './typestyles.css'
import { useRef, useEffect, useState } from "react";

function Types() {
    const introRefs = useRef([]);

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
        introRefs.current.forEach((ref) =>{
            if (ref) {
                let hrect = ref.getBoundingClientRect();//y value is top of bounding box
                ref.style.color = "black";
                //console.log(hrect.y); the higher up the element is on the screen the closer this value is to 0, it goes negative once off the top of the screen
                let elPosition = ((Math.abs(hrect.bottom) - Math.abs(hrect.top))/2) + hrect.top + scrollPosition; //position in the document
                let viewH = window.innerHeight;
                let appearanceRange = viewH/4;//change this for how much of the viewport you want the trigger to occur under
                let bottom = scrollPosition + viewH/2 + appearanceRange;
                let top = scrollPosition + viewH/2 - appearanceRange;
                let isInMiddle = false;
                elPosition <= bottom && elPosition >= top ? isInMiddle = true : isInMiddle = false;

                if (isInMiddle) {
                    //add fadeIn
                    ref.style.animation = "textFadeIn .3s forwards";
                } else {
                    //addFadeOut
                    ref.style.animation = "textFadeOut .3s forwards";
                }

        }})
    }, [scrollPosition]);

    return (
        <>
            <p ref={(el) => introRefs.current[0] = el} className="intro">Hello, this is my website!</p>
            <p ref={(el) => introRefs.current[1] = el} className="subtext"> Test
            </p>
            <p className='size'>Bottom</p>
        </>
    );
}

export default Types;