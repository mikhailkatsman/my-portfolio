import { useEffect, useState } from "react";

export default function AutoType(props) {
    const [generatedText, setGeneratedText] = useState([]);
    const inputText = props.children;

    useEffect(() => {
        for (let i = 0; i < inputText.length; i++) {
            setTimeout(() => {
                setGeneratedText((prev) => [
                    ...prev,
                    inputText[i],
                ]);
            }, 100 * i);
        }  
    }, [inputText]);

    return (
        <p>
            {generatedText}
        </p>
    );
}