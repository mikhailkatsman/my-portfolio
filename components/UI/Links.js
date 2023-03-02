import classes from './Links.module.css';

export default function Links(props) {
    return props.tags.map(tech => 
        <a 
            key={tech.name}
            className={classes.link}
            href={tech.url}
        >
            {tech.label}
        </a>
    )
}