import Face from "./Face";
import Card from "../UI/Card";

import classes from "./ProjectItem.module.css";
import { useEffect, useRef, useState } from "react";

export default function ProjectItem(props) {
    const item = useRef(null);
    const [onScreen, setOnScreen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([element]) => {
            console.log('item on screen');
            setOnScreen(element.isIntersecting);
        }, {
            root: null,
            rootMargin: '1px',
            threshold: 0.5,
        });

        var currentItem = item.current;
        observer.observe(currentItem);

        return () => {
            observer.unobserve(currentItem);
        };
    }, []);

    return (
        <div
            ref={item} 
            className={`
                faces-row 
                ${classes[props.zIndex]}
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
                    <h2>DESCRIPTION</h2>
                </Card>
            </Face>
        </div>
    );
}
