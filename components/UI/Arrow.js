import Image from "next/image";

import classes from "./Arrow.module.css";

export default function Arrow() {
    return (
        <div className={classes.arrow}>
            <Image 
                className={classes.arrow} 
                src={`/nav/arrow-right.svg`}
                alt="nav"
                width={30}
                height={30}
            />
        </div>
    );
}