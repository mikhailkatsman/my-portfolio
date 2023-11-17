import { useEffect, useRef } from 'react';
import fs from 'fs';
import path from "path";

import Back from "@/components/UI/Back";
import Head from "next/head";
import Face from "@/components/layout/Face";
import Card from "@/components/UI/Card";

import { technologies, projects } from "@/data/projectData";
import HeaderDetails from "@/components/layout/ProjectHeaderDetails";
import ProjectNameContainer from "@/components/layout/ProjectNameContainer";
import ProjectDescriptionSection from "@/components/layout/ProjectDescriptionSection";

export function getStaticPaths() {
	return {
		fallback: "blocking",
		paths: projects.map((project) => ({
			params: { slug: project.slug },
		})),
	};
}

export function getStaticProps(context) {
	const projectSlug = context.params.slug;
	const project = projects.find(entry => entry.slug === projectSlug);
	const projectAssetsPath = path.join(process.cwd(), 'public', 'projects', projectSlug);
	const fileNames = fs.readdirSync(projectAssetsPath);
	let filePaths = fileNames.map(fileName => `/projects/${projectSlug}/${fileName}`)


	if (project.type === 'website') {
		let pairs = []
		for (let i = 0; i < filePaths.length; i += 2) {
			pairs.push(filePaths.slice(i, i + 2));
		}

		filePaths = pairs;
	}

	return { props: { 
		project, 
		assets: filePaths 
	} };
}

export default function ProjectPage(props) {
	const headerRef = useRef(null)
	const pageAnim = {
		direction: "up--project-title",
		type: "transition-in",
	};

	const projectTitle = "Mikhail Katsman | " + props.project.name;
	const usedTechTags = technologies.filter((tech) =>
		props.project.technologies.includes(tech.name)
	);

	useEffect(() => {
		if (headerRef.current) {
        headerRef.current.scrollIntoView({ behavior: 'auto', block: 'end' });
    }
	}, []);

	return (
		<>
			<Head>
				<title>{projectTitle}</title>
			</Head>
			<Back />
			<header ref={headerRef}>
				<div className={`faces faces--project`}>
					<div className="faces-row">
						<ProjectNameContainer
							direction={pageAnim.direction} 
							type={pageAnim.type}
						>
							<Face id="face-project-name" plain="y-plain">
								<Card id="card-name">
									<h1 className="project-title-text">
										{props.project.name}
									</h1>
								</Card>
							</Face>
						</ProjectNameContainer>
						<HeaderDetails usedTechTags={usedTechTags} links={props.project.links} />
					</div>
				</div>
			</header>
			<main className={`description fade-in`}>
				{props.assets.map((path, index) => (
					<ProjectDescriptionSection 
						key={index}
						index={index}
						desktopImage={path[0]}
						mobileImage={path[1]}
						text={props.project.imageDescription[index]}
					/>
				))}
			</main>
		</>
	);
}
