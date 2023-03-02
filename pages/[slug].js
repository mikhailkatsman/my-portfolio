import { useState } from "react";

import Head from "next/head";
import Face from "@/components/layout/Face";
import Card from "@/components/UI/Card";
import Links from '@/components/UI/Links';

import { technologies, projects } from '@/data/projectData';

export function getStaticPaths() {
	return {
		fallback: "blocking",
		paths: projects.map((project) => ({
			params: { slug: project.slug },
		})),
	};
}

export function getStaticProps(context) {
    const project = projects.find((entry) => entry.slug === context.params.slug);

	return { props: { project } };
}

export default function ProjectPage(props) {
	const [pageState, setPageState] = useState({
		direction: "up",
		type: "transition-in",
	});

	const projectTitle = 'Mikhail Katsman | ' + props.project.name;
	const usedTechTags = technologies.filter(
		(tech) => props.project.technologies.includes(tech.name)
	);

	return (
		<>
			<Head>
				<title>{projectTitle}</title>
			</Head>
			<header>
				<div
					className={`
                        faces 
                        ${pageState.direction} 
                        ${pageState.type}
                    `}
				>
					<div className="faces-row">
						<Face id="face-project-name" plain="y-plain">
							<Card id="card-name">
								<h3>{props.project.name}</h3>
							</Card>
						</Face>
						<Face id="face-project-technologies" plain="z-plain">
							<Card orientation="column" id="card-technologies" type={'pivot-left'}>
								<Links tags={usedTechTags} />
							</Card>
						</Face>
					</div>
				</div>
			</header>
			<main className={`details-section fade-in`}>
				<p className="details-text">{props.project.description}</p>
			</main>
		</>
	);
}
