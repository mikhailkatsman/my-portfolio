import { useRouter } from "next/router";
import { saveAs } from 'file-saver';

import Image from "next/image";
import classes from "./Button.module.css";

export default function Button(props) {
    const router = useRouter();

    const redirect = setRedirect(props.push);
    function setRedirect(address) {
        switch (address) {
            case 'email':
                return 'mailto:mkatdev@outlook.com';
            case 'linkedin':
                return 'https://www.linkedin.com/in/mikhail-katsman/';
            case 'discord':
                return 'https://www.discordapp.com/users/717023680223510609/';
            default:
                return `/${props.push}`;
        }
    }

    async function handleOnClick(event) {
        event.preventDefault();

        switch (props.type) {
            case 'about':
                const docRes = await fetch(`/docs/Mikhail_Katsman_${props.push}.pdf`);
                const docBlob = await docRes.blob();
                saveAs(docBlob,`Mikhail_Katsman_${props.push}.pdf`);
                return;
            case 'contact':
                window.open(redirect, '_ blank');
                return;
            case 'project-item':
                props.setFacesTransition({
                    type: 'fade-out',
                    direction: null,
                });
                props.setProjectItemTransition();
                break;
            default:
                props.setFacesTransition(prev => ({
                    ...prev,
                    type: 'transition-out',
                    direction: props.direction,
                }));
                break;
        }

        setTimeout(() => {
            router.push(redirect);
        }, 500);
    }

    let children = (
        <>  { props.type ==='contact'|| props.type === 'about'?
                <h4 className={classes['button-text']}>{props.push}</h4>
            : props.push === 'about' || props.type !== 'index' ? 
                null
            :   <h4 className={classes['button-text']}>{props.push}</h4> }
            <Image 
                className={
                    props.type === 'contact' ? classes[`contact-logo`]
                    : props.type === 'about' ? classes[`about-logo`]
                    : classes.arrow
                } 
                src={
                    props.type === 'contact' ? `/contact/${props.push}.svg`
                    : props.type === 'about' ? `/about/${props.push}.svg`
                    : `/nav/arrow-${props.direction}.svg`
                }
                alt={props.push}
                width={30}
                height={30}
            />
            {props.push === 'about' ? 
                <h4 className={classes['button-text']}>{props.push}</h4>
            : null }
        </>
    );

    let link = (
        <a
        href={redirect}
        rel={props.type === 'contact' ? 'noopener noreferrer' : null}
        className={`${classes.button} ${classes[props.type]} ${classes[props.direction]}`}
        onClick={handleOnClick} 
        >
            {children}
        </a>
    );

    return (
        link
    );
}
