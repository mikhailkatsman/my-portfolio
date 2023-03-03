import Image from "next/image";

import classes from './LinkItem.module.css';

export default function LinkItem(props) {
    return (
        <li className="header-tag">
			<a className={classes["link-item"]} href={props.url}>
				{props.label}
                <Image c
					lassName={classes['link-logo']} 
					src={props.logo} 
					alt="logo"
					width={30}
					height={30}
				/>
			</a>
		</li>
    );
}