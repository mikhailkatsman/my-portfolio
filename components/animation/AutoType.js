import { useEffect, useState } from "react";

export default function AutoType(props) {
    const [generatedText, setGeneratedText] = useState([]);
    const inputText = props.children;
    const inputLength = inputText.length;

    function tick(i) {
        setGeneratedText(inputText.slice(0, i));
        
        if (i >= inputLength) {
            return;
        }

        setTimeout(function () {
            tick(i + 1);
        }, Math.floor(Math.random() * (100 - 50) + 50));
    }

    useEffect(() => {
        tick(1);         
    }, []);

    return <p>{generatedText}</p>;
}
