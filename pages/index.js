import { useState } from "react";

import Head from "next/head";
import Face from "@/components/layout/Face";
import Card from "@/components/UI/Card";
import Button from "@/components/UI/Button";
import AutoType from "@/components/animation/AutoType";

export default function Home() {
    const [facesState, setFacesState] = useState({
        direction: "",
        type: "",
    });

    return (
        <>
            <Head>
                <title>Mikhail Katsman</title>
                <meta charSet="UTF-8" />
                <meta
                    name="description"
                    content="Portfolio of Mikhail Katsman"
                />
                <meta name="viewport" content="user-scalable=0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`faces ${facesState.direction} ${facesState.type}`}>
                <div className="faces-row">
                    <Face id="face-1" plain="y-plain">
                        <Card id="card-1" type="pivot-right">
                            <AutoType>
                                HI! This is my portfolio page.
                            </AutoType>
                            {/* <h2>HI! This is my portfolio page.</h2> */}
                        </Card>
                    </Face>
                    <Face id="face-2" plain="z-plain">
                        <Card id="card-2" type="pivot-left">
                            <h1>MAP</h1>
                        </Card>
                    </Face>
                </div>
                <Face id="face-3" plain="x-plain">
                    <Card id="card-3" type="float-up" orientation="column">
                        <Button
                            push="contact"
                            setTransition={setFacesState}
                            direction="left"
                        >
                            &#8592; Contact.
                        </Button>
                    </Card>
                    <Card id="card-4" type="float-up" orientation="column">
                        <Button
                            push="projects"
                            setTransition={setFacesState}
                            direction="right"
                        >
                            &#8595; Projects.
                        </Button>
                    </Card>
                </Face>
            </div>
            <footer><p>&#169; Mikhail Katsman</p></footer>
        </>
    );
}
