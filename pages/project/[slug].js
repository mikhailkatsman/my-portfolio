// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Head from "next/head";

// FRONTEND
export default function Whatever({ data }) {
    if (data === null) {
        return <div>404</div>;
    }
    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>{" "}
            <div>{data.name}</div>
        </>
    );
}

// BACKEND
export async function getStaticProps({ params }) {
    let slug = params.slug;
    let data = null;
    // data = db.select(`SELECT * FROM authors WHERE name="${slug}"`);

    try {
        data = require(`../../data/${slug}`);
    } catch (e) {
        return { props: { data: null } };
    }

    return { props: { data } };
}

export async function getStaticPaths() {
    let fs = require("fs/promises");

    return {
        paths: ["some-project"].map((slug) => {
            return { params: { slug: slug } };
        }),
        fallback: true,
    };
}
