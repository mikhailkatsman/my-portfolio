import ProjectItem from './ProjectItem';

import classes from './ProjectList.module.css';

export default function ProjectList() {
    return (
        <>
            <div className={classes.list}>
                <ProjectItem zIndex='z3'/>
                <ProjectItem zIndex='z2'/>
                <ProjectItem zIndex='z1'/>
            </div>
        </>
    );
}
