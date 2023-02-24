import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

export default function ProjectList(props) {
    return (
        <div className={classes.list}>
            {props.projectsDir.map((name) => 
                <ProjectItem key={name} projectName={name} />
            )}
        </div>
    );
}
