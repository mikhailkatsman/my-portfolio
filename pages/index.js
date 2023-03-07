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
							<Card id="card-description" type="pivot-right">
								<h4 className="page-description--top-text">
									Thanks for visiting my portfolio page.
                                </h4>
								<p className="page-description--bottom-text">
									Browse around!
                                </p>
							</Card>
						</Face>
						<Face id="face-2" plain="z-plain">
							<Card id="card-greeting" type="pivot-left">
								<h1 className="greeting-large-text">Hi!</h1>
								<p className="greeting-small-text">I&apos;m Misha.</p>
							</Card>
						</Face>
					</div>
					<Face id="face-index-buttons" plain="x-plain">
						<Card id="card-index-to-contact" type="float-up">
							<Button
								type="index"
								push="contact"
								setTransition={setFacesState}
								direction="down"
							/>
						</Card>
						<div className="index-link-container--col">
							<Card id="card-index-to-about" type="float-up">
								<Button
									type="index"
									push="about"
									setTransition={setFacesState}
									direction="left"
								/>
							</Card>
							<Card id="card-index-to-projects" type="float-up">
								<Button
									type="index"
									push="projects"
									setTransition={setFacesState}
									direction="right"
								/>
							</Card>
						</div>
					</Face>
				</div>
			</header>
		</>
	);
}
