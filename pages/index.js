import { useState } from "react";

import Head from "next/head";
import Face from "@/components/layout/Face";
import Card from "@/components/UI/Card";
import Button from "@/components/UI/Button";


export default function Home() {
	const [facesState, setFacesState] = useState({
		direction: "",
		type: "",
	});

	return (
		<>
			<Head>
				<title>Mikhail Katsman</title>
			</Head>
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
							<Card id="card-1" type="pivot-right">
								<h4>
									Lorem ipsum dolor sit amet, 
									consectetur adipiscing elit. 
                                </h4>
							</Card>
						</Face>
						<Face id="face-2" plain="z-plain">
							<Card id="card-2" type="pivot-left">
								<h1>HI!</h1>
							</Card>
						</Face>
					</div>
					<Face id="face-3" plain="x-plain">
						<Card id="card-index-to-contact" type="float-up">
							<Button
								type="index"
								push="contact"
								setTransition={setFacesState}
								direction="down"
							>
								CONTACT
							</Button>
						</Card>
						<Card id="card-index-to-about" type="float-up">
							<Button
								type="index"
								push="about"
								setTransition={setFacesState}
								direction="left"
							>
								ABOUT
							</Button>
						</Card>
						<Card id="card-index-to-projects" type="float-up">
							<Button
								type="index"
								push="projects"
								setTransition={setFacesState}
								direction="right"
							>
								PROJECTS
							</Button>
						</Card>
					</Face>
				</div>
			</header>
		</>
	);
}
