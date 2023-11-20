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
        excerpt: "A dynamic content aggregation platform specializing in curated fashion.",
        mainDescription: [
            "<b>endource.com</b> is a dynamic content aggregation platform specializing in curated fashion. The website integrates and synthesizes data from various influential fashion magazines, websites, and blogs using RESTful API calls.<br></br>The platform uses <b>Prismic CMS</b> for content management, presenting a comprehensive fashion guides that showcase products endorsed by industry-leading editors and bloggers.",
            "All page layout are done using <b>Twig</b> templating language and any UI logic is implemented with <b>JavaScript</b>. Every content block is responsive to viewport dimensions. Most of the CSS media queries are done using <b>Tailwind</b>.",
            "Product data is passed in via a custom API and rendered on the PDP with appropriate product data, tags and product images and a dynamic list of related products. User has an option of setting notifications for when the price of the product has decreased, or redirecting to the seller's page.",
            "Website content creators have the ability to construct <b>blog post</b> pages by selecting custom made <b>Prismic CMS</b> content blocks such as single image or image collages, quotes, text blocks with or without headers, link and list blocks."
        ],
        imageDescription: [
            "<b>Landing Page</b><br></br>Consists of different visual blocks with relevant functionality.",
            "<b>Brands Filter Page</b><br></br>Clean and immediate response on user input. Vertical or horizontal layout on viewport size change.",
            "<b>Product Detail Page (PDP)</b><br></br>Responsive image grid/slider. Related products and tags.",
            "<b>Blog Post Page</b><br></br>All text and image data passed through Prismic CMS and formated into blocks."
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
    //     excerpt: "Android mobile application that allows users to view and publish location tagged events.",
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
    {
        name: "My_Portfolio",
        slug: "my-portfolio",
        technologies: [
            "js",
            "react",
            "nextjs",
        ],
        type: "website",
        excerpt: "The website you're viewing now. Made using modern JavaScript tools like React and Next.js",
        mainDescription: [
            "This is my <b>portfolio page</b>. <i>There are many like it, but this one is mine</i>.<br></br>Since you've already navigated to this page, you have experienced all the implemented transition animations and an overall aesthetic of the website, so i will try and be as brief as possible.<br></br><br></br>For the purposes of achieving the <i>isometric projection</i> look of the website I've employed a set of CSS tranform properties, and applied perspertive depth to immitate the <i>z-axis</i> in button and page transition animations. The result is a modular 3D layout, where each visible <i>face</i>(or <i>plain</i>) can be treated as a normal 2-dimensional container.",
            "React's <b>useState</b> hook has alowed me to specify the pan directions for transition animations depending on the chosen navigation option (like <b>+y</b> for /contact page and <b>+x</b> for /projects page).",
            "The website is depeloped with a <i>mobile-first</i> approach. Each element is enlarged and made to take up as much viewport space as possible. Color palette is monochrome and typefaces are bold and clear with maximum contrast to the background, to counteract the <i>skewed</i> rendering of text and other elements.",
            "Additionaly, i have utilised <b>Next.js getStaticPaths / getStaticProps</b> to pregenerate templates for project pages (like the one you're viewing now), which allows me to add project data to website's repository without modyfing any of the website's components. Project templates are then rendered differently depending on the specified project <i>type</i>."
        ],
        imageDescription: [
            "<b>Landing Page Animation</b><br></br>Each <i>face</i> has it's own variating animation depending on the page placement.",
            "<b>Page Transition Animation</b><br></br>Each button press passes pan directions to a global state, which in turn sets the direction of translate animation. By navigating to /about page, translate is set to <b>translateX(-...%)</b>",
            "<b>Projects List Page</b><br></br>Each project has it's own <i>card</i> witch is lazy loaded once it enters the user's viewport. Cards also contain a custom project logo, name and a short excerpt.",
            "<b>Project Description Page</b><br></br>Depending on the project <i>type</i> the page is rendered differently, maximizing the use of available viewport realestate and presenting image/video material appropriately.",
        ],
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
