import Head from "next/head";
import Faces from "@/components/layout/Faces";

export default function Home() {
    return (
        <>
            <Head>
                <title>Mikhail Katsman</title>
                <meta
                    name="description"
                    content="Portfoli of Mikhail Katsman"
                />
                <meta
                    name="viewport"
                    content="width=device-width user-scalable=0"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
              <Faces />
            </main>
        </>
    );
}
