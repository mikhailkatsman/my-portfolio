import Image from "next/image";

import classes from "./Tag.module.css";

export default function Tag(props) {
	const tagKey = props.key;

	return (
		<li key={props.key}>
			<a className={classes["tag"]} href={props.url}>
				{props.label}
                <Image 
					className={classes['logo']} 
					src={props.logo} 
					alt="logo"
					width={15}
					height={15}
				/>
			</a>
		</li>
	);
}
