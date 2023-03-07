import { useRef } from "react";

import Image from "next/image";

import classes from './EmailLink.module.css';

export default function EmailLink() {
    const emailRef = useRef(null);

    function copyToClipboard() {
		navigator.clipboard.writeText(emailRef.current.innerText);
	}

    return (
        <>
            <p 
                className={classes['email-text']} 
                ref={emailRef}
                onClick={copyToClipboard}
            >
                mkatdev@outlook.com
                <br></br><Image 
                    className={classes['email-copy']}
                    src="/contact/copy.svg"
                    alt="copy email"
                    width={50}
                    height={50}
                />
            </p>
        </>
    );
}