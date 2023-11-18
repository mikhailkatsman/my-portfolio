export const technologies = [
    {
        name: 'dart',
        label: "Dart",
        logo: "/logos/logo-dart.svg",
        url: "https://dart.dev/"
    },
    {
        name: 'flutter',
        label: "Flutter",
        logo: "/logos/logo-flutter.svg",
        url: "https://flutter.dev/"
    },
    {
        name: 'firebase',
        label: "Firebase",
        logo: "/logos/logo-firebase.svg",
        url: "https://firebase.google.com/"
    },
    {
        name: 'html',
        label: "HTML",
        logo: "/logos/logo-html5.svg",
        url: "https://www.w3.org/html/"
    },
    {
        name: 'css',
        label: "CSS",
        logo: "/logos/logo-css3.svg",
        url: "https://www.w3.org/Style/CSS/"
    },
    {
        name: 'js',
        label: "JavaScript",
        logo: "/logos/logo-javascript.svg",
        url: "https://en.wikipedia.org/wiki/JavaScript"
    },
    {
        name: 'react',
        label: "React",
        logo: "/logos/logo-react.svg",
        url: "https://reactjs.org/"
    },
    {
        name: 'nextjs',
        label: "Next.js",
        logo: "/logos/logo-nextjs.svg",
        url: "https://nextjs.org/"
    },
    {
        name: 'nodejs',
        label: "Node.js",
        logo: "/logos/logo-nodejs.svg",
        url: "https://nodejs.org/"
    },
    {
        name: 'twig',
        label: "Twig",
        logo: "/logos/logo-twig.svg",
        url: "https://twig.symfony.com/"
    },
    {
        name: 'tailwind',
        label: "Tailwind",
        logo: "/logos/logo-tailwind.svg",
        url: "https://tailwindcss.com/"
    },

];

export const projects = [
    {
        name: "Endource",
        slug: "endource",
        technologies: [
            "html",
            "twig",
            "js",
            "tailwind",
        ],
        type: "website",
        excerpt: "excert",
        mainDescription: [
            "image 1",
            "image 2",
            "image 3",
        ],
        imageDescription: [
            "<b>Landing Page</b><br></br>Consists of different visual blocks with relevant functionality.",
            "<b>Brands Filter Page</b><br></br>Clean and immediate response on user input. Vertical or horizontal layout on viewport size change.",
            "<b>Product Detail Page (PDP)</b><br></br>Responsive image grid/slider. Related products and tags.",
            '<b>Blog Post Page</b><br></br>All text and image data passed through Prismic CMS and formated into blocks.' 
        ],
        links: [
            {
                label: "Endource",
                logo: "/logos/logo-endource.svg",
                url: "https://www.endource.com/"
            }
        ],
    },
    // {
    //     name: "NOWS_App",
    //     slug: "nows-app",
    //     technologies: [
    //         "dart",
    //         "flutter",
    //         "firebase",
    //     ],
    //     type: "mobile",
    //     excerpt: "NOWS_app is an Android application that allows users to view and publish location based events.",
    //     description: "<b>NOWS_app</b> is essentially a social network consisting of pins (or posts) with geolocation metadata which are displayed within a certain radius of each user. The user can view and <i>'attend'</i> the post, therefore giving it more exposure and allowing it be visible for longer.<br></br>I have used Firebase Authentication services for user sessions. Realtime Database stores text/location/image data of each post. Non-authorised users can only view recent posts, but would not be able to create any.<br></br>Flutter is cross-platform, therefore porting the app to iOS is achievable with a few small changes. For proof-of-concept I have opted to develop and test on Android platform.<br></br>A complete list of packages and dependencies can be found in GitHub repository's <b>README.md</b> file.",
    //     links: [
    //         {
    //             label: "YouTube",
    //             logo: "/logos/logo-youtube.svg",
    //             url: "https://www.youtube.com/watch?v=P8iCu2nqF2k"
    //         },
    //         {
    //             label: "GitHub",
    //             logo: "/logos/logo-github.svg",
    //             url: "https://github.com/mikhailkatsman/NOWS_app"
    //         },
    //     ]
    // },
    {
        name: "TK_Portfolio",
        slug: "tk-portfolio",
        technologies: [
            "html",
            "js",
            "css",
            "nodejs",
        ],
        type: "website",
        excerpt: "A static website portfolio for a professional fashion photographer.",
        mainDescription: [
            "<b>tomilakatsman.com</b> is a static website portfolio for a professional fashion photographer. The goal of the website is to channel the client's aesthetic preferences by creating an interactive grid of selected works and mixing them with stylized videos.<br></br>Decision was made to display an <i>intro</i> animation before navigating to gallery to differentiate from majority of auto-generated CMS-produced portfolios and introduce a little more personality to this website.", 
            "Each grid element is <i>'lazy-loaded'</i> and has a small translating animation on load for more eye candy. Retaining original image's aspect ratio the grid keeps element gaps uniform. Visual fading added to highlight user selection. Page header blurs underlying parts of the grid.",
            "I've created a custom gallery generator that takes uploaded image data, rescales it automatically (for optimisation purposes), fetches the first image as thumbnail for the grid element and populates the carousel with the rest of the image data. All the client has to do is upload images to the source directory folder.",
            "Website files are stored on GitHub and automatically deployed by Netlify from the main repository. Any form submissions are filtered for spam before the admin is notified."
        ],
        imageDescription: [
            "<b>Landing Page Animation</b><br></br>Using CSS key frames with scale, translate and fade properties.",
            "<b>Gallery Page Grid</b><br></br>Custom masonry grid with lazy loading and buffering animations. Video playback possible on elements.",
            "<b>Photoshoot Page</b><br></br>Custom carousel with cursor controls and swipe detection for mobile view.",
            "<b>Form Submission page</b><br></br>Data passed to Netlify and sent to admin via email.",
        ],
        links: [
            {
                label: "Website",
                logo: "/logos/logo-tk-portfolio.svg",
                url: "https://tomilakatsman.com"
            },
            {
                label: "GitHub",
                logo: "/logos/logo-github.svg",
                url: "https://github.com/mikhailkatsman/TK_portfolio"
            },
        ]
    },
    // {
    //     name: "My_Portfolio",
    //     slug: "my-portfolio",
    //     technologies: [
    //         "js",
    //         "react",
    //         "nextjs",
    //     ],
    //     type: "website",
    //     excerpt: "The website you're viewing now. Made using modern JavaScript tools like React and Next.js",
    //     description: "For the purposes of achieving the <i>'isometric projection'</i> look of the website I've employed a set of CSS tranform properties, and applied perspertive depth to immitate <i>'z-axis'</i> in button and page transition animations. The result is a modular 3D layout, where each visible <i>'face'</i> can be treated as a normal 2D container.<br></br><b>React useState</b> hook has alowed me to specify the pan directions for transition animations depending on the chosen navigation option (like <i>'x-axis'</i> down for /contact page and right for /projects page).<br></br>Additionaly, i have utilised <b>Next.js getStaticPaths/getStaticProps</b> to pregenerate templates for project pages (like the one you're viewing now), which allows me to add project material to website's directory without modyfing any JSX components.",
    //     links: [
    //         {
    //             label: "GitHub",
    //             logo: "/logos/logo-github.svg",
    //             url: "https://github.com/mikhailkatsman/my-portfolio"
    //         },
    //         {
    //             label: "CodePen",
    //             logo: "/logos/logo-codepen.svg",
    //             url: "https://codepen.io/kry3er"
    //         },
    //     ]
    // },
];
