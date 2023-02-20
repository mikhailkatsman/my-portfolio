import { useEffect, useState } from "react";

export default function AutoType(props) {
    const [generatedText, setGeneratedText] = useState('');
    const inputText = props.text;

    function typeText() {
        for (let i = 0; i < inputText.length; i++) {
            setGeneratedText((prev) => {
                prev += inputText.charAt(i);
            });
            setTimeout(typeText, 50);
        }   
    }

    return (
        <p>
            {generatedText}
        </p>
    );
}