import "@/styles/globals.css";
import "@/styles/queries.css";
import { Analytics } from "@vercel/analytics/react";

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
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
            <div className="background" />
			<div className="content">
				<Component {...pageProps} />
				<Analytics />
			</div>
			<footer>
				<p>&#169; Mikhail Katsman</p>
			</footer>
		</>
	);
}
