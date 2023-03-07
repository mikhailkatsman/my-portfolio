import Image from "next/image";

import classes from "./Tag.module.css";

export default function Tag(props) {
	function handleOnClick(event) {
		event.preventDefault();

		window.open(props.url, '_ blank');
		return;
	}

	return (
		<li key={props.name}>
			<a 
				className={classes["tag"]} 
				href={props.url}
				rel='noopener noreferrer'
				onClick={handleOnClick}
			>
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
