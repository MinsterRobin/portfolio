const data = {
    title: "Robin Minster - Frontend Freelance Developer",
    url: "https://robin-minster.fr",
    email: "minster.robin.pro@gmail.com",
    test: "oui",
    socials_list: [
        {
            key: "10",
            src_logo: "/Linkedin.svg",
            alt: "Social Linkedin",
            url: "https://www.linkedin.com/in/robin-minster-1a874a162/"
        },
        {
            key: "11",
            src_logo: "/Mail.svg",
            alt: "Social Email",
            url: "mailto:minster.robin.pro@gmail.com"
        },
        {
            key: "12",
            src_logo: "/Github.svg",
            alt: "Social Github",
            url: "https://github.com/MinsterRobin"
        }
    ],

    fr: {
        nav: {
            name: "Robin Minster",
            about: "À propos",
            skills: "Compétences",
            exps: "Expériences",
            contact: "Contact"
        },

        about: {
            h1: "Hello ! Je suis Robin Minster.",
            h1_span: "Je suis développeur Web",
            h2: "Ingénieur spécialisé en informatique et réseaux, je suis développeur web Front-End. " +
                "Passionné, curieux et professionnel, toujours à la recherche d’expériences passionnantes et enrichissantes, tant sur le plan technique que le plan humain, je serais heureux de réaliser, avec vous, votre projet web. " +
                "Au plaisir d'échanger sur vos projets, a bientôt ! "
        },

        skills: {
            title: "Compétences",
            developer: {
                title: "Développeur",
                src_logo: "/Pf-Developer_Icon.svg",
                alt_logo: "Developer_Icon",
                skills_list:["React.js", "Vue.js", "Next.js", "Sass", "Styled Components", "react-spring"]
            },
            designer: {
                title: "Designer",
                src_logo: "/Pf-Designer_Icon.svg",
                alt_logo: "Designer_Icon",
                skills_list:["Figma","Dessin Vectoriel","Mockup","Wireframing","UI Design"]
            }
        },

        exps: {
            title: "Expériences",
            cards: [
                {
                    src_logo: "/Logo_Sopra-Steria.svg",
                    alt_logo: "Logo Sopra-Steria",
                    title: "Développeur Back-End",
                    subtitle: "Stage technicien",
                    description: "Sopra Steria a été retenue fin 2012 pour réaliser l’architecture et l’intégration du Système d’Information des Armées (SIA). Dans le but d’optimiser l’industrialisation du projet et sa gestion, Sopra Steria développe ses propres outils couplés à la suite logiciel IBM Jazz. J’ai pu participer au développement de ces outils.",
                    technos_list: ["Docker","SoapUI","IBM Jazz","Jenkins","JSON","XML","Java"]
                },
                {
                    src_logo: "/Logo_Sopra-Steria.svg",
                    alt_logo: "Logo Sopra-Steria",
                    title: "Développeur Back-End",
                    subtitle: "Alternant technicien",
                    description: "J’ai pu intégrer un projet initié en 2009 consistant à fournir un suivi technique de l’application SIM@T (Système d’Information de la MAintenance Terrestre) dans le but de le maintenir en condition opérationnelle en le modernisant et en le corrigeant selon les demandes de la SIMMT.",
                    technos_list: ["SoapUI","SVN","Oracle SQL Developer","Tomcat","Maven","J2EE","IntelliJ","ALM HP"]
                }
            ]
        },

        contact: {
            title: "Contact",
            h3: "Envie de me soumettre votre projet ?",
            h3_info: "Contactez moi !",
            button: "Discutons !",
            copy_label: "copié !"
        }
    },

    eng: {
        nav: {
            name: "Robin Minster",
            about: "About",
            skills: "Skills",
            exps: "Experiences",
            contact: "Contact",
        },

        about: {
            h1: "Hi ! I'm Robin.",
            h1_span: "I’m a Web developer.",
            h2: "Engineer specializing in IT and networks, I am a Front-End web developer." +
                "Passionate, curious and professional, always looking for exciting and enriching experiences, both technically and humanly, I would be happy to carry out your web project with you." +
                "Looking forward to discussing your projects, see you soon!"
        },

        skills: {
            title: "Skills",
            developer: {
                title: "Developer",
                src_logo: "/Pf-Developer_Icon.svg",
                alt_logo: "Developer_Icon",
                skills_list:["React.js", "Vue.js", "Next.js", "Sass", "Styled Components", "react-spring"]
            },
            designer: {
                title: "Designer",
                src_logo: "/Pf-Designer_Icon.svg",
                alt_logo: "Designer_Icon",
                skills_list:["Figma","Vector drawing","Mockup","Wireframing","UI Design"]
            }
        },

        exps: {
            title: "Experiences",
            cards: [
                {
                    src_logo: "/Logo_Sopra-Steria.svg",
                    alt_logo: "Logo Sopra-Steria",
                    title: "Back-End Developer",
                    subtitle: "Technician internship",
                    description: "Sopra Steria was selected at the end of 2012 to carry out the architecture and integration of the Army Information System (Système d'Information des Armées). In order to optimize the industrialization of the project and its management, Sopra Steria is developing its own tools coupled with the IBM Jazz software suite. I was able to participate in the development of these tools.",
                    technos_list: ["Docker","SoapUI","IBM Jazz","Jenkins","JSON","XML","Java"]
                },
                {
                    src_logo: "/Logo_Sopra-Steria.svg",
                    alt_logo: "Logo Sopra-Steria",
                    title: "Back-End Developer",
                    subtitle: "Technician working student",
                    description: "I was able to integrate a project initiated in 2009 consisting of providing technical monitoring of the SIM@T application (Land Maintenance Information System) with the aim of maintaining it in operational condition by modernizing and correcting it according to the requests of the SIMMT.",
                    technos_list: ["SoapUI","SVN","Oracle SQL Develoer","Tomcat","Maven","J2EE","IntelliJ","ALM HP"]
                }
            ]
        },

        contact: {
            title: "Contact",
            h3: "Want to pitch your project ?",
            button: "Let's chat !",
            h3_info: "Contact me !",
            copy_label: "copied !"
        }
    }
};

export default data;