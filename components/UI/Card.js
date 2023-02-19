import { useState } from "react";
import classes from "./Card.module.css";

export default function Card(props) {
    return (
        <div
            id={classes[props.id]}
            className={`${classes.card} ${classes[props.type]} ${classes.animate}`}
        >
            {props.children}
        </div>
    );
}
