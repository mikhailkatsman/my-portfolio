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
        excerpt: "NOWS is an Android application that allows users to view and publish location based events.",
        description: "The aim of the NOWS application is to host and display a realtime database of postcards or 'Nowcards', published by the users of the application. These Nowcards appear on the interactive map of the application as a set of clickable location markers.<br><br>Each Nowcard has a timer, and a dedicated 'attend' button, that keeps track of how many other users have decided to 'attend' the event. After a certain period of time has passed, the Nowcard gets deleted from the database. Each time the Nowcard 'attend' button is clicked by viewers in the area, this timer is postponed.",
        notes: "A complete list of packages and dependencies can be found in Github repository's README.md file.",
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
            "css",
            "js",
            "nodejs",
        ],
        excerpt: "A static website portfolio that I've created for my wife who is a professional fashion photographer.",
        description: "The aim of the NOWS application is to host and display a realtime database of postcards or 'Nowcards', published by the users of the application. These Nowcards appear on the interactive map of the application as a set of clickable location markers. Each Nowcard has a timer, and a dedicated 'attend' button, that keeps track of how many other users have decided to 'attend' the event. After a certain period of time has passed, the Nowcard gets deleted from the database. Each time the Nowcard 'attend' button is clicked by viewers in the area, this timer is postponed.",
        notes: "A complete list of packages and dependencies can be found in Github repository's README.md file.",
        links: [
            {
                label: "Website",
                logo: "/logos/logo-tk-portfolio.svg",
                url: "https://tk-portfolio.netlify.app/"
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
        description: "The aim of the NOWS application is to host and display a realtime database of postcards or 'Nowcards', published by the users of the application. These Nowcards appear on the interactive map of the application as a set of clickable location markers. Each Nowcard has a timer, and a dedicated 'attend' button, that keeps track of how many other users have decided to 'attend' the event. After a certain period of time has passed, the Nowcard gets deleted from the database. Each time the Nowcard 'attend' button is clicked by viewers in the area, this timer is postponed.",
        notes: "A complete list of packages and dependencies can be found in Github repository's README.md file.",
        links: [
            {
                label: "GitHub",
                logo: "/logos/logo-github.svg",
                url: "https://github.com/mikhailkatsman/my-portfolio"
            },
        ]
    },
];
