export const technologies = [
    {
        name: 'dart',
        label: "Dart",
        logo: "/public/logos/logo-dart.svg",
        url: "https://dart.dev/"
    },
    {
        name: 'flutter',
        label: "Flutter",
        logo: "/public/logos/logo-flutter.svg",
        url: "https://flutter.dev/"
    },
    {
        name: 'firebase',
        label: "Firebase",
        logo: "/public/logos/logo-firebase.svg",
        url: "https://firebase.google.com/"
    },
    {
        name: 'html',
        label: "HTML",
        logo: "/public/logos/logo-html5.svg",
        url: "https://www.w3.org/html/"
    },
    {
        name: 'css',
        label: "CSS",
        logo: "/public/logos/logo-css3.svg",
        url: "https://www.w3.org/Style/CSS/"
    },
    {
        name: 'js',
        label: "JavaScript",
        logo: "/public/logos/logo-javascript.svg",
        url: "https://en.wikipedia.org/wiki/JavaScript"
    },
    {
        name: 'react',
        label: "React",
        logo: "/public/logos/logo-react.svg",
        url: "https://reactjs.org/"
    },
    {
        name: 'nextjs',
        label: "Next.js",
        logo: "/public/logos/logo-nextjs.svg",
        url: "https://nextjs.org/"
    },
    {
        name: 'nodejs',
        label: "Node.js",
        logo: "/public/logos/logo-nodejs.svg",
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
                logo: "/public/logos/logo-youtube.svg",
                url: "https://www.youtube.com/watch?v=P8iCu2nqF2k"
            },
            {
                label: "GitHub",
                logo: "/public/logos/logo-github.svg",
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
        excerpt: "A static website portfolio that I've created for my wife who is a professional photographer.",
        description: "The aim of the NOWS application is to host and display a realtime database of postcards or 'Nowcards', published by the users of the application. These Nowcards appear on the interactive map of the application as a set of clickable location markers. Each Nowcard has a timer, and a dedicated 'attend' button, that keeps track of how many other users have decided to 'attend' the event. After a certain period of time has passed, the Nowcard gets deleted from the database. Each time the Nowcard 'attend' button is clicked by viewers in the area, this timer is postponed.",
        notes: "A complete list of packages and dependencies can be found in Github repository's README.md file.",
        links: [
            {
                label: "Website",
                url: "future link"
            },
            {
                label: "GitHub",
                url: "https://github.com/mikhailkatsman/NOWS_app"
            },
        ]
    },
    {
        name: "This_Website",
        slug: "this-website",
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
                url: "https://github.com/mikhailkatsman/NOWS_app"
            },
        ]
    },
];
