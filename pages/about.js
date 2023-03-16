import Head from "next/head";
import Face from "@/components/layout/Face";
import Card from "@/components/UI/Card";
import Button from "@/components/UI/Button";

export default function Contact() {
	const pageAnim = {
		direction: "left",
		type: "transition-in",
	};

	return (
		<>
			<Head>
				<title>Mikhail Katsman | About</title>
			</Head>
			<header>
				<div
					className={`
                        faces 
						faces--index
                        ${pageAnim.direction} 
                        ${pageAnim.type}
                    `}
				>
					<div className="faces-row">
						<Face id="face-1" plain="y-plain">
							<Card id="card-description">
								<p className="page-description--top-text">
									I&apos;m a web developer
                                </p>
							</Card>
						</Face>
						<Face id="face-2" plain="z-plain">
							<Card id="card-page-title" type="pivot-left">
								<h1 className="page-title-text">about</h1>
							</Card>
						</Face>
					</div>
					<Face id="face-about-buttons" plain="x-plain">
						<Card id="card-cv" type="float-up">
							<Button
								type="about"
								push="CV"
							/>
						</Card>
						<Card id="card-cert" type="float-up">
							<Button
								type="about"
								push="Courses"
							/>
						</Card>
					</Face>
				</div>
			</header>
		</>
	);
}