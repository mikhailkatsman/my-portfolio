import Head from "next/head";

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
	return (
		<>
			<Head>
				<title>Mikhail Katsman | {props.project.name}</title>
			</Head>
			<p>{props.project.description}</p>
		</>
	);
}
