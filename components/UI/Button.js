import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./Button.module.css";

export default function Button(props) {
    const router = useRouter();

    function handleOnClick(event) {
        event.preventDefault();

        router.prefetch(`/${props.push}`);

        props.setTransition('transition-out');

        setTimeout(() => {
            router.push(`/${props.push}`);
        }, 500);
    }

    return (
        <a onClick={handleOnClick} href={`/${props.push}`} className={`${classes.button}`}>
            {props.children}
        </a>
    );
}
