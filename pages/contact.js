import Back from "@/components/UI/Back";
import Head from "next/head";
import Button from "@/components/UI/Button";
import Face from "@/components/layout/Face";
import Card from "@/components/UI/Card";
import EmailLink from "@/components/UI/EmailLink";

export default function Contact() {
	const pageAnim = {
		direction: "down",
		type: "transition-in",
	};

	return (
		<>
			<Head>
				<title>Mikhail Katsman | Contact</title>
			</Head>
			<Back />
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
								<EmailLink />
								<p className="page-description--bottom-text">
									Or use these links.
                                </p>
							</Card>
						</Face>
						<Face id="face-2" plain="z-plain">
							<Card id="card-page-title" type="pivot-left">
								<h1 className="page-title-text">contact</h1>
							</Card>
						</Face>
					</div>
					<Face id="face-index-buttons" plain="x-plain">
						<div className="contact-link-container--col">
							<Card id="card-contact--email" type="float-up">
								<Button
									type="contact"
									push="email"
								/>
							</Card>
							<Card id="card-contact--linkedin" type="float-up">
								<Button
									type="contact"
									push="linkedin"
								/>
							</Card>
							<Card id="card-contact--discord" type="float-up">
								<Button
									type="contact"
									push="discord"
								/>
							</Card>
						</div>
					</Face>
				</div>
			</header>
		</>
	);
}
