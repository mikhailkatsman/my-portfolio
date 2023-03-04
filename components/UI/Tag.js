import Image from "next/image";

import classes from "./Tag.module.css";

export default function Tag(props) {
	return (
		<li>
			<a className={classes["tag"]} href={props.url}>
				{props.label}
                <Image 
					className={classes['logo']} 
					src={props.logo} 
					alt="logo"
					width={30}
					height={30}
					placeholder="blur"
					blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACXBIWXMAAC4jAAAuIwF4pT92AAAACklEQVQIHWNgAAAAAgABz8g15QAAAABJRU5ErkJggg=="
				/>
			</a>
		</li>
	);
}
