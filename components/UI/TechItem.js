import Image from "next/image";

import classes from "./TechItem.module.css";

export default function TechItem(props) {
	return (
		<li>
			<a className={classes["tech-item"]} href={props.url}>
				{props.label}
                <Image c
					lassName={classes['tech-logo']} 
					src={props.logo} 
					alt="logo"
					width={30}
					height={30}
				/>
			</a>
		</li>
	);
}
