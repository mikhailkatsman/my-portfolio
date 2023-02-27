import ProjectItem from "./ProjectItem";

import { projects } from "@/data/projectData";

export default function ProjectList(props) {
	return (
		<div>
			{projects.map((project) => {
				const img = props.imgs.find(
					(image) => image.fileName === project.slug + "-1.jpg"
				);

				return (
					<ProjectItem
						key={project.slug}
						imgPath={img ? img.filePath : ""}
						name={project.name}
						excerpt={project.excerpt}
					/>
				);
			})}
		</div>
	);
}
