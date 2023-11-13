import { useEffect } from "react";

import Back from "@/components/UI/Back";
import Head from "next/head";
import Face from "@/components/layout/Face";
import Card from "@/components/UI/Card";

import { technologies, projects } from "@/data/projectData";
import HeaderDetails from "@/components/layout/ProjectHeaderDetails";
import ProjectNameContainer from "@/components/layout/ProjectNameContainer";
import ProjectImageDesktop from "@/components/layout/ProjectImageDesktop";

export function getStaticPaths() {
	return {
		fallback: "blocking",
		paths: projects.map((project) => ({
			params: { slug: project.slug },
		})),
	};
}

export function getStaticProps(context) {
	const project = projects.find(
		(entry) => entry.slug === context.params.slug
	);

	return { props: { project } };
}

export default function ProjectPage(props) {
	const pageAnim = {
		direction: "up--project-title",
		type: "transition-in",
	};

	const projectTitle = "Mikhail Katsman | " + props.project.name;
	const usedTechTags = technologies.filter((tech) =>
		props.project.technologies.includes(tech.name)
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Head>
				<title>{projectTitle}</title>
			</Head>
			<Back />
			<header>
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
			<main className={`description-section fade-in`}>
				<div className="description-column">
					<ProjectImageDesktop src="/projects/endource/1-desktop.webp" />
					<div style={{height: "50px" }} />
					<ProjectImageDesktop src="/projects/endource/1-mobile.webp" />
					<div style={{height: "50px" }} />

				</div>
				<div className="description-column">
					<p
						className="description-text"
						dangerouslySetInnerHTML={{
							__html: props.project.description,
						}}
					/>
				</div>
			</main>
		</>
	);
}
