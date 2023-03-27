import { useState } from "react";
import fs from "fs/promises";
import path from "path";

import Back from "@/components/UI/Back";
import Head from "next/head";
import Face from "@/components/layout/Face";
import Card from "@/components/UI/Card";
import ProjectList from "@/components/layout/ProjectList";
import Arrow from "@/components/UI/Arrow";

export async function getStaticProps() {
	const imgDirPath = path.join(process.cwd(), "public", "img");
	const imgFileNames = await fs.readdir(imgDirPath);

	const imgs = imgFileNames.map((fileName) => {
		return {
			fileName,
			filePath: `/img/${fileName}`,
		};
	});

	return {
		props: { imgs },
	};
}

export default function Projects(props) {
	const [facesState, setFacesState] = useState({
		direction: "right",
		type: "transition-in",
	});

	return (
		<>
			<Head>
				<title>Mikhail Katsman | Projects</title>
			</Head>
			<Back />
			<header>
				<div
					className={`
                        faces
						faces--index
                        ${facesState.direction} 
                        ${facesState.type}
                    `}
				>
					<div className="faces-row">
						<Face id="face-1" plain="y-plain">
							<Card id="card-description">
								<p className="page-description--top-text">
									Have a look<br></br>at some 
									<span style={{fontStyle:"italic"}}> stuff</span>
									<br></br>I&apos;ve made.
                                </p>
							</Card>
						</Face>
						<Face id="face-2" plain="z-plain">
							<Card id="card-page-title" type="pivot-left">
								<h1 className="page-title-text">projects</h1>
							</Card>
						</Face>
					</div>
					<Face id="face-project-arrow" plain="y-plain">
						<Arrow />
					</Face>
				</div>
			</header>
			<main className={`
				list-section
				${facesState.direction} 
                ${facesState.type}
			`}>
				<ProjectList 
					setFacesTransition={setFacesState}
					imgs={props.imgs}
				/>
				<div className="bottom-spacer"></div>
			</main>
		</>
	);
}
