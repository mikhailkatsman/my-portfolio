import { useRouter } from "next/router";

import Image from "next/image";
import classes from "./Button.module.css";

export default function Button(props) {
    const router = useRouter();

    function handleOnClick(event) {
        event.preventDefault();

        props.setTransition(prev => ({
            ...prev,
            type: 'transition-out',
            direction: props.direction,
        }));

        setTimeout(() => {
            router.push('/' + props.push);
        }, 500);
    }

    let children = (
        <Image 
            className={classes.arrow} 
            src={`/nav/arrow-${props.direction}.svg`}
            alt="nav"
            width={30}
            height={30}
        />
    );

    if (props.push === 'about') {
        children = (
            <>
                <Image 
                    className={classes.arrow} 
                    src={`/nav/arrow-${props.direction}.svg`}
                    alt="nav"
                    width={30}
                    height={30}
                />
                <h4 className={classes['index-text']}>{props.push}</h4>
            </>
        );
    }

    if (props.push === 'projects' || props.push === 'contact') {
        children = (
            <>
                <h4 className={classes['index-text']}>{props.push}</h4>
                <Image 
                    className={classes.arrow} 
                    src={`/nav/arrow-${props.direction}.svg`}
                    alt="nav"
                    width={30}
                    height={30}
                />
            </>
        );
    }

    return (
        <a 
            onClick={handleOnClick} 
            href={`/${props.push}`} 
            className={`${classes.button} ${classes[props.type]} ${classes[props.direction]}`}
        >
            {children}
        </a>
    );
}
