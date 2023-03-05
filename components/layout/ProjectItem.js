import Face from "./Face";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Image from "next/image";

import classes from "./ProjectItem.module.css";

import { useEffect, useRef, useState } from "react";

export default function ProjectItem(props) {
	const item = useRef(null);
	const [onScreen, setOnScreen] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([element]) => {
				if (element.isIntersecting && !onScreen) {
					setOnScreen(true);
					observer.unobserve(currentItem);
				}
			},
			{
				root: null,
				rootMargin: "1px",
				threshold: 0.3,
			}
		);

		var currentItem = item.current;
		observer.observe(currentItem);

		return () => {
			observer.unobserve(currentItem);
		};
	}, []);

	return (
		<div
			ref={item}
			className={`
                faces-row 
                ${classes["project-item"]}
                ${onScreen ? classes.revealed : ""}
            `}
		>
			<Face id="face-4" plain="z-plain">
				<Card id="card-img" type={onScreen ? "pivot-right" : ""}>
					<Image 
                        src={props.imgPath}
                        alt={props.imgPath} 
                        sizes="40vw"
                        fill
                    />
				</Card>
			</Face>
			<Face id="face-5" plain="y-plain">
				<Card
					id="card-project"
					type={onScreen ? "pivot-left" : ""}
				>
                    <div className={classes.info}>
                        <div className={classes.title}>{props.name}</div>
                        <div className={classes.excerpt}>{props.excerpt}</div>
                    </div>
					<Button
                        type="project-item"
						push={props.slug}
						setTransition={props.setFacesState}
						direction="up"
                    />
				</Card>
			</Face>
		</div>
	);
}
