import { useEffect, useState } from "react";

export default function AutoType(props) {
    const [generatedText, setGeneratedText] = useState("");
    const inputText = props.children;
    const inputLength = inputText.length;

    function tick(i) {
        if (i > inputLength) {
            return;
        }

        setGeneratedText(inputText.slice(0, i));
        setTimeout(function () {
            tick(i + 1);
        }, Math.floor(Math.random() * (100 - 30) + 30));
    }

    useEffect(() => {
        tick(1);
    }, []);

    return <p>{generatedText}</p>;
}
