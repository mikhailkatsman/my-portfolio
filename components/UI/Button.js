import { useRouter } from "next/router";

import Image from "next/image";
import classes from "./Button.module.css";

export default function Button(props) {
    const router = useRouter();

    function handleOnClick(event) {
        event.preventDefault();

        if (props.type === 'contact') {
            switch (props.push) {
                case 'email':
                    
                    break;
                case 'linkedin':                    
                    router.push('https://www.linkedin.com/in/mikhail-katsman-ba64a7123/');
                    break;
                case 'discord':
                    router.push('https://www.discordapp.com/users/717023680223510609/');
                    break;        
                default:
                    break;
            }
            return;
        }

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
                <h4 className={classes['button-text']}>{props.push}</h4>
            </>
        );
    }

    if (props.push === 'projects' || props.push === 'contact' || props.type === 'contact') {
        children = (
            <>
                <h4 className={classes['button-text']}>{props.push}</h4>
                <Image 
                    className={
                        props.type === 'contact' ? classes[`contact-logo`]
                        : classes.arrow
                    } 
                    src={
                        props.type === 'contact' ? `/contact/${props.push}.svg`
                        : `/nav/arrow-${props.direction}.svg`
                    }
                    alt={props.push}
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
