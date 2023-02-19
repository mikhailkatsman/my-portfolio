import Head from "next/head";
import Faces from "@/components/layout/Faces";

export default function Home() {
    return (
        <>
            <Head>
                <title>Mikhail Katsman</title>
                <meta charset="UTF-8" />
                <meta
                    name="description"
                    content="Portfolio of Mikhail Katsman"
                />
                <meta name="viewport" content="user-scalable=0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Faces />
            </main>
        </>
    );
}
