import { useState } from "react";

import Head from "next/head";
import Face from "@/components/layout/Face";
import Card from "@/components/UI/Card";
import Button from "@/components/UI/Button";

export default function Home() {
    const [pageState, setPageState] = useState({
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
            <main>
                <section
                    className={`face-section ${pageState.direction} ${pageState.type}`}
                >
                    <div className="face-section-row">
                        <Face id="face-1" plain="y-plain">
                            <Card id="card-1" type="pivot-right">
                                <h2>Something text here.</h2>
                            </Card>
                        </Face>
                        <Face id="face-2" plain="z-plain">
                            <Card id="card-2" type="pivot-left">
                                <h1>HI!</h1>
                            </Card>
                        </Face>
                    </div>
                    <Face id="face-3" plain="x-plain">
                        <Card id="card-3" type="float-up" orientation="column">
                            <Button
                                push="contact"
                                setTransition={setPageState}
                                direction="left"
                            >
                                &#8592; Contact.
                            </Button>
                            <Button
                                push="projects"
                                setTransition={setPageState}
                                direction="right"
                            >
                                &#8595; Projects.
                            </Button>
                        </Card>
                    </Face>
                </section>
            </main>
        </>
    );
}
