import ProjectItem from "./ProjectItem";

import { projects } from "@/data/projectData";

export default function ProjectList(props) {
	return (
		<>
			{projects.map((project, index) => {
				const img = props.imgs.find(
					(image) => image.fileName === project.slug + "-1.webp"
				);

				return (
					<ProjectItem
						zIndex={projects.length - index}
						setFacesTransition={props.setFacesTransition}
						key={project.slug}
						slug={project.slug}
						imgPath={img ? img.filePath : ""}
						name={project.name}
						excerpt={project.excerpt}
					/>
				);
			})}
		</>
	);
}
