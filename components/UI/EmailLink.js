import { useRef, useState } from "react";

import Image from "next/image";

import classes from './EmailLink.module.css';

export default function EmailLink() {
    const emailRef = useRef(null);
    const [copyState, setCopyState] = useState(false);

    function copyToClipboard() {
        navigator.clipboard.writeText(emailRef.current.innerText);
        setCopyState(true);
    }

    return (
        <>
            <p 
                className={classes['email-text']} 
                ref={emailRef}
                onClick={copyToClipboard}
            >
                mkatdev@outlook.com
                <br></br>
                <Image 
                    className={classes['email-copy']}
                    src="/contact/copy.svg"
                    alt="copy email"
                    width={50}
                    height={50}
                />
            </p>
            <span
                className={`
                    ${classes['copy-message']}
                    ${copyState && classes['fade-in-out']}
                `}
                onAnimationEnd={() => setCopyState(false)}
            >
                Copied to clipboard!
            </span>
        </>
    );
}