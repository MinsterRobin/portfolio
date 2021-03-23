const data = {
    title: "Robin Minster",
    url: "https://robin-minster.fr",
    email: "minster.robin.pro@gmail.com",
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
            h1: "Hello ! Je suis Robin.",
            h1_span: "Je suis un développeur Web full-stack.",
            h2: "Jeune auto-entrepreneur passionné par l’informatique et les nouvelles technologies, je suis titulaire d’un diplôme d’ingénieur spécialisé en génie logiciel. En tant que développeur React, je me propose pour mener à bien vos projets !"
        },

        skills: {
            title: "Compétences",
            developer: {
                title: "Développeur",
                src_logo: "/Pf-Developer_Icon.svg",
                alt_logo: "Developer_Icon",
                skills_list:["React.js","Styled Components","Express","MongoDB","MySQL","Git"]
            },
            designer: {
                title: "Désigneur",
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
                    description: "Sopra Steria a été retenue fin 2012 pour réaliser l’architecture et l’intégration du Système d’Information des Armées (SIA). Dans le but d’optimiser l’indutrialisation du projet et sa gestion, Sopra Steria développe ses propres outils couplés à la suite logiciel IBM Jazz. J’ai pu participer au développement de ces outils.",
                    technos_list: ["Docker","SoapUI","IBM Jazz","Jenkins","JSON","XML","Java"]
                },
                {
                    src_logo: "/Logo_Sopra-Steria.svg",
                    alt_logo: "Logo Sopra-Steria",
                    title: "Développeur Back-End",
                    subtitle: "Alternant technicien",
                    description: "J’ai pu intégrer un projet initié en 2009 consistant à fournir un suivi technique de l’application SIM@T (Système d’Information de la MAintenance Terrestre) dans le but de le maintenir en condition opérationnelle en le modernisant et en le corrigeant selon les demandes de la SIMMT.",
                    technos_list: ["SoapUI","SVN","Oracle SQL Develoer","Tomcat","Maven","J2EE","IntelliJ","ALM HP"]
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
            h1_span: "I’m a full-stack Web developer.",
            h2: "My name is Robin Minster, a young freelancer passionate about IT and new technologies, I have an engineering degree specializing in software engineering. As a React.js full-stack web developer, I propose to achieve your projects !"
        },

        skills: {
            title: "Skills",
            developer: {
                title: "Developer",
                src_logo: "/Pf-Developer_Icon.svg",
                alt_logo: "Developer_Icon",
                skills_list:["React.js","Styled Components","Express","MongoDB","MySQL","Git"]
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