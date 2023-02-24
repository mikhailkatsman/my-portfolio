import Face from "./Face";
import Card from "../UI/Card";

import classes from "./ProjectItem.module.css";
import { useEffect, useRef, useState } from "react";

export default function ProjectItem(props) {
    const item = useRef(null);
    const [onScreen, setOnScreen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([element]) => {
            if (element.isIntersecting && !onScreen) {
                setOnScreen(true);
                observer.unobserve(currentItem);
            }
        }, {
            root: null,
            rootMargin: '1px',
            threshold: 0.1,
        });
        
        var currentItem = item.current;
        observer.observe(currentItem);
        
        return () => {
            observer.unobserve(currentItem);
        }
    }, []);

    return (
        <div
            ref={item} 
            className={`
                faces-row 
                ${classes["project-item"]}
                ${onScreen ? classes.revealed : ''}
            `}
        >
            <Face id="face-4" plain="z-plain">
                <Card id="card-4" type={onScreen ? 'pivot-right' : ''}>
                    <h2>PICTURE</h2>
                </Card>
            </Face>
            <Face id="face-5" plain="y-plain">
                <Card id="card-5" type={onScreen ? 'pivot-left' : ''}>
                    <h2>{props.projectName}</h2>
                </Card>
            </Face>
        </div>
    );
}
