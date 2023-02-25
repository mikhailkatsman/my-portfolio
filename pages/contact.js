import { useState } from "react";

import Head from "next/head";
import Face from "@/components/layout/Face";
import Card from "@/components/UI/Card";

export default function Contact() {
    const [pageState, setPageState] = useState({
        direction: 'left',
        type: 'transition-in',
    });

    return (
        <>
            <Head>
                <title>Mikhail Katsman | Contact</title>
            </Head>
            <header>
                <div className={`
                        faces 
                        ${pageState.direction} 
                        ${pageState.type}
                    `}
                >
                    <div className="faces-row">
                        <Face id="face-1" plain="y-plain">
                            <Card id="card-1" type="">
                                <h2>Contact.</h2>
                            </Card>
                        </Face>
                        <Face id="face-2" plain="z-plain">
                            <Card id="card-2" type="pivot-left">
                                <h1>HI!</h1>
                            </Card>
                        </Face>
                    </div>
                </div>
            </header>
            <footer><p>&#169; Mikhail Katsman</p></footer>
        </>
    );
}