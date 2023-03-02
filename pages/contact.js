import { useState } from "react";

import Image from "next/image";
import Head from "next/head";
import Face from "@/components/layout/Face";
import Card from "@/components/UI/Card";

export default function Contact() {
	const [pageState, setPageState] = useState({
		direction: "down",
		type: "transition-in",
	});

	return (
		<>
			<Head>
				<title>Mikhail Katsman | Contact</title>
			</Head>
			<header>
				<div
					className={`
                        faces 
						faces--index
                        ${pageState.direction} 
                        ${pageState.type}
                    `}
				>
					<div className="faces-row">
						<Face id="face-1" plain="y-plain">
							<Card id="card-1" type="">
								<h2 className="contact-title">/Contact</h2>
							</Card>
						</Face>
						<Face id="face-2" plain="z-plain">
							<Card id="card-2" type="pivot-left">
								<Image
									className="map"
									src="/map/contact-map.webp"
									alt="map"
									fill
								/>
							</Card>
						</Face>
					</div>
				</div>
			</header>
		</>
	);
}
