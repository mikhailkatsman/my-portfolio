import { useState } from "react";
// import fs from "fs";
// import path from "path";

import Head from "next/head";
import Face from "@/components/layout/Face";
import Card from "@/components/UI/Card";
import ProjectList from "@/components/layout/ProjectList";


// export async function getStaticProps() {
//     // import images
// }

export default function Projects(props) {
    const [facesState, setFacesState] = useState({
        direction: "right",
        type: "transition-in",
    });
    const [listState, setListState] = useState("");

    // useEffect(() => {
    //     window.addEventListener(
    //         "scroll",
    //         () => {
    //             console.log("scrolling detected");
    //         },
    //         { once: true }
    //     );
    // }, []);

    return (
        <>
            <Head>
                <title>Mikhail Katsman | Projects</title>
                <meta charSet="UTF-8" />
                <meta
                    name="description"
                    content="Projects of Mikhail Katsman"
                />
                <meta name="viewport" content="user-scalable=0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div
                    className={`
                    faces
                    ${facesState.direction} 
                    ${facesState.type}
                    `}
                >
                    <div className="faces-row">
                        <Face id="face-1" plain="y-plain">
                            <Card id="card-1" type="">
                                <h2>Projects.</h2>
                            </Card>
                        </Face>
                        <Face id="face-2" plain="z-plain">
                            <Card id="card-2" type="pivot-left">
                                <h1>MAP</h1>
                            </Card>
                        </Face>
                    </div>
                    <Face id="face-3" plain="x-plain">
                        <Card id="card-1" type="float-up">
                            <p>Scroll down.</p>
                        </Card>
                    </Face>
                </div>
            </header>
            <main className={`list-section ${listState}`}>
                <ProjectList />
            </main>
            <footer>
                <p>&#169; Mikhail Katsman</p>
            </footer>
        </>
    );
}
