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
            </Head>
            <div className={`faces ${facesState.direction} ${facesState.type}`}>
                <div className="faces-row">
                    <Face id="face-1" plain="y-plain">
                        <Card id="card-1" type="pivot-right">
                            <AutoType>
                                HELLO! This is my portfolio page!
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
                            color="blue"
                            push="contact"
                            setTransition={setFacesState}
                            direction="left"
                        >
                            &#8592; Contact.
                        </Button>
                    </Card>
                    <div style={{ height: "2.8rem" }} />
                    <Card id="card-4" type="float-up" orientation="column">
                        <Button
                            color="yellow"
                            push="projects"
                            setTransition={setFacesState}
                            direction="right"
                        >
                            &#8595; Projects.
                        </Button>
                    </Card>
                </Face>
            </div>
            <footer>
                <p>&#169; Mikhail Katsman</p>
            </footer>
        </>
    );
}
