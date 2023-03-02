import { useState } from "react";

import Head from "next/head";
import Face from "@/components/layout/Face";
import Card from "@/components/UI/Card";

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

	const { name, technologies, excerpt, description, notes, links } = props.project;
	const title = 'Mikhail Katsman | ' + name;

	return (
		<>
			<Head>
				<title>{title}</title>
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
						<Face id="face-1" plain="y-plain">
							<Card id="card-1" type="pivot-right">
								<h2 className="index-title">
                                    /{name}
                                </h2>
							</Card>
						</Face>
						<Face id="face-2" plain="z-plain">
							<Card orientation="column" id="card-2" type={'pivot-left'}>
								{technologies.map((tech => 
									<p key={tech}>
										{tech}
									</p>
								))}
							</Card>
						</Face>
					</div>
					<Face id="face-3" plain="x-plain">
						<Card id="card-3" type="float-up" orientation="column">
							<p>{description}</p>
						</Card>
					</Face>
				</div>
			</header>
		</>
	);
}
