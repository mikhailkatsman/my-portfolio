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
    {
        name: "NOWS_App",
        slug: "nows-app",
        technologies: [
            "dart",
            "flutter",
            "firebase",
        ],
        type: "mobile",
        excerpt: "Android mobile application that allows users to view and publish location tagged events.",
        mainDescription: [
            "The aim of the <b>NOWS</b> application is to host and display a realtime database of postcards or <i>Nowcards</i>, published by the users of the application. These Nowcards appear on the interactive map of the application as a set of clickable location markers.<br></br>Each Nowcard has a timer, and a dedicated <i>attend</i> button, that keeps track of how many other users have decided to <i>attend</i> the event. After a certain period of time has passed, the Nowcard gets deleted from the database. Each time the Nowcard <i>attend</i> button is clicked by viewers in the area, this timer is postponed.<br></br><br></br>For more information about the inner working of this application please see the <a href='https://github.com/mikhailkatsman/NOWS_app'>GitHub Repository</a>",
            "The map screen is deliberately monochrome and void of unnecessary detail. There is a limit set for maximum and minimum zoom levels since the application aims to display Nowcard markers within a walking distance from a user. Every subsecuent interface window requested by the user, keeps the state of the Map Screen, so as to avoid unnecessary map tile fetching.",
            "If the Firebase Authentication fails during Application initialization, the user is presented with <i>Login</i> text button, that prompts the user to input his/her credentials. If the user presses the <i>Register here!</i> button, the application displays a registration form. The registration process requires the user to: <b><br></br>- Upload an avatar image<br></br>- Create a username<br></br>- Input an existing email address<br></br>- Create a password<br></br></b>After the user submitted the registration form, the application remembers the new authentication state, and brings the newly authenticated user back to the home screen.",
            "",
            "When user presses the Nows post button, the application initializes a multi-stage process of creating a Nowcard. This posting process consists of:<br></br><b>- Displaying a Camera Viewport<br></br>- Requesting to input Nowcard title<br></br>- Requesting to input Nowcard description text</b><br></br>Only then can the user upload the Nowcard form. After the process is complete, the new marker will appear on the map display. This marker will be visible to all other users within the local area.",
            "Every viewed <b>NowCard</b> consists displays time ellapsed since it's creation, displays the poster's uploaded image, title and description, and has an <i>Attend</i> button to keep track of how many other users have decided to attend the event."
        ],
        imageDescription: [
            "<b>Basic Operation</b><br></br>Browse the map for relevant information or attend ongoing events that might interest you.",
            "<b>Map Tile Color Change</b><br></br>Light/Dark mode replaces the map tiles with different contrasting set, to allow for better viewing experience in direct sunlight or during nighttime.",
            "<b>Login Process</b><br></br>Input your email and password or create a new account.",
            "<b>Account Window</b><br></br>If the user has already authenticate the text button changes state to a Circular Avatar button. When pressed, the application shows the Account Display, which allows the user to change username, change user avatar, logout or delete user account.",
            "<b>Making a post</b><br></br>Snap a photo, input title and description. The new Card will appear on the map for everyone to view.",
            "<b>Viewing existing Card</b><br></br>When you're planning to visit a venue, check the map for a Card. Maybe someone shared anything of note.",
        ],
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
