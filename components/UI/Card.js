import classes from "./Card.module.css";

export default function Card(props) {
    return (
        <div
            id={classes[props.id]}
            className={`${classes.card} ${classes[props.type]} ${classes[props.orientation]}`}
        >
            {props.children}
        </div>
    );
}
