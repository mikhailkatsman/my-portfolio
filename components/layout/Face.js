import classes from "./Face.module.css";

export default function Face(props) {
    return (
        <div 
            id={classes[props.id]} 
            className={`
                ${classes.face} 
                ${props.plain}
                ${props.direction} 
				${props.type}
            `}
        >
            {props.children}
        </div>
    );
}
