import classes from './ProjectNameContainer.module.css';

export default function ProjectNameContainer(props) {
    return (
        <div className={`${classes.wrapper} ${props.direction} ${props.type}`}>
            {props.children}
        </div>
    );
}