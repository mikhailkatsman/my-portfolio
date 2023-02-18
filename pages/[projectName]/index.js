// import Head from "next/head";

// // CLIENT
// export default function Whatever(props) {
//     if (data === null) {
//         return <div>404</div>;
//     }
//     return (
//         <>
//             <Head>
//                 <title>{props.name}</title>
//             </Head>{" "}
//             <div>{props.description}</div>
//         </>
//     );
// }

// // SERVER
// export async function getStaticPaths() {
//     let fs = require("fs/promises");

//     const projectsDir = await fs.readdir(`${__dirname}/data/projects`);

//     return {
//         fallback: false,
//         paths: projectsDir.map((project) => {
//             return { params: { projectName: project.name } };
//         }),
//     };
// }

// export async function getStaticProps() {

//     return { props: null };
// }
