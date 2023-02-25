import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="description"
                    content="Portfolio of Mikhail Katsman"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=0.3, user-scalable=0"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
