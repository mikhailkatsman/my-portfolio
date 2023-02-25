import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

import { projects } from '@/projects/projectData';

export default function ProjectList(props) {
    return (
        <div className={classes.list}>
            {projects.map((project) => 
                <ProjectItem 
                    key={project.slug} 
                    name={project.name} 
                    excerpt={project.excerpt}
                />
            )}
        </div>
    );
}
