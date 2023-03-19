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
];

export const projects = [
    {
        name: "NOWS_App",
        slug: "nows-app",
        technologies: [
            "dart",
            "flutter",
            "firebase",
        ],
        excerpt: "NOWS_app is an Android application that allows users to view and publish location based events.",
        description: "<b>NOWS_app</b> is essentially a social network consisting of pins (or posts) with geolocation metadata which are displayed within a certain radius of each user. The user can view and <i>'attend'</i> the post, therefore giving it more exposure and allowing it be visible for longer.<br></br>I have used Firebase Authentication services for user sessions. Realtime Database stores text/location/image data of each post. Non-authorised users can only view recent posts, but would not be able to create any.<br></br>Flutter is cross-platform, therefore porting the app to iOS is achievable with a few small changes. For proof-of-concept I have opted to develop and test on Android platform.<br></br>A complete list of packages and dependencies can be found in GitHub repository's <b>README.md</b> file.",
        links: [
            {
                label: "YouTube",
                logo: "/logos/logo-youtube.svg",
                url: "https://www.youtube.com/watch?v=P8iCu2nqF2k"
            },
            {
                label: "GitHub",
                logo: "/logos/logo-github.svg",
                url: "https://github.com/mikhailkatsman/NOWS_app"
            },
        ]
    },
    {
        name: "TK_Portfolio",
        slug: "tk-portfolio",
        technologies: [
            "html",
            "js",
            "css",
            "nodejs",
        ],
        excerpt: "A static website portfolio that I've created for my wife who is a professional fashion photographer.",
        description: "This static website uses <i>'basic'</i> web-development tools and a custom <b>node.js</b> page generator to produce a photography portfolio with gallery view for each portfolio entry. Website is fully responsive to mobile/desktop and gallery view is <i>'swipeable'</i>.<br></br>The challenge of creating this website was in making a responsive <i>'masonry'</i> grid of exactly 3 columns, which has to display both <b>.jpg</b> and <b>.mp4</b> content, adjust gaps and widths of elements accordingly, and retain original aspect ratios.<br></br>Additionaly, I have written a small static page generator that allows me to add/remove image and video files to/from directory and auto-generate all the grid elements and their respective galleries.",
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
    {
        name: "My_Portfolio",
        slug: "my-portfolio",
        technologies: [
            "js",
            "react",
            "nextjs",
        ],
        excerpt: "The website you're viewing now. Made using modern JavaScript tools like React and Next.js",
        description: "For the purposes of achieving the <i>'isometric projection'</i> look of the website I've employed a set of CSS tranform properties, and applied perspertive depth to immitate <i>'z-axis'</i> in button and page transition animations. The result is a modular 3D layout, where each visible <i>'face'</i> can be treated as a normal 2D container.<br></br><b>React useState</b> hook has alowed me to specify the pan directions for transition animations depending on the chosen navigation option (like <i>'x-axis'</i> down for /contact page and right for /projects page).<br></br>Additionaly, i have utilised <b>Next.js getStaticPaths/getStaticProps</b> to pregenerate templates for project pages (like the one you're viewing now), which allows me to add project material to website's directory without modyfing any JSX components.",
        links: [
            {
                label: "GitHub",
                logo: "/logos/logo-github.svg",
                url: "https://github.com/mikhailkatsman/my-portfolio"
            },
            {
                label: "CodePen",
                logo: "/logos/logo-codepen.svg",
                url: "https://codepen.io/kry3er"
            },
        ]
    },
];
