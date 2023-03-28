import { useRouter } from "next/router";
import { useRef } from "react";

import Image from "next/image";
import classes from './Back.module.css';

export default function Back() {
    const router = useRouter();
    const buttonRef = useRef();

    function handleClick() {
        buttonRef.current.classList.add(classes.disappear);
        setTimeout(() => {
            router.back();
        }, 200);
    }

    return (
        <button
            ref={buttonRef}
            className={classes.button}
            onClick={handleClick}
        >
            <Image 
                className={classes.arrow} 
                src="/nav/arrow-down.svg"
                alt="Go Back"
                width={30}
                height={30}
            />
        </button>
    );
}