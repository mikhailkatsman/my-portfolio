import classes from "./Card.module.css";

export default function Card(props) {
    return (
        <div
            id={classes[props.id]}
            className={`${classes.card} ${classes[props.type]}`}
        >
            {props.children}
        </div>
    );
}
