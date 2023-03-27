import { useRouter } from "next/router";

import Image from "next/image";
import classes from './Back.module.css';

export default function Back() {
    const router = useRouter();

    function handleClick() {
        router.back();
    }

    return (
        <button 
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