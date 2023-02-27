import { useState } from "react";
import fs from "fs/promises";
import path from "path";

import Image from "next/image";
import Head from "next/head";
import Face from "@/components/layout/Face";
import Card from "@/components/UI/Card";
import ProjectList from "@/components/layout/ProjectList";

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
	const [listState, setListState] = useState("");

	// useEffect(() => {
	//     window.addEventListener(
	//         "scroll",
	//         () => {
	//             console.log("scrolling detected");
	//         },
	//         { once: true }
	//     );
	// }, []);

	return (
		<>
			<Head>
				<title>Mikhail Katsman | Projects</title>
			</Head>
			<header>
				<div
					className={`
                        faces
                        ${facesState.direction} 
                        ${facesState.type}
                    `}
				>
					<div className="faces-row">
						<Face id="face-1" plain="y-plain">
							<Card id="card-1" type="">
								<h2 className="projects-title">
                                    /projects
                                </h2>
							</Card>
						</Face>
						<Face id="face-2" plain="z-plain">
							<Card id="card-2" type="pivot-left">
                                <Image 
									className="map"
									src="/map/projects-map.webp" 
									alt="map"
									fill
								/>
							</Card>
						</Face>
					</div>
					<Face id="face-3" plain="x-plain">
						<Card id="card-1" type="float-up">
							<h3>Scroll...</h3>
						</Card>
					</Face>
				</div>
			</header>
			<main className={`list-section ${listState}`}>
				<ProjectList imgs={props.imgs}/>
			</main>
		</>
	);
}
