import { useRouter } from "next/router";
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

    return (
        <a 
            onClick={handleOnClick} 
            href={`/${props.push}`} 
            className={`${classes.button} ${classes[props.type]} ${classes[props.color]}`}
        >
            {props.children}
        </a>
    );
}
