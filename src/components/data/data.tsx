import { faGithub, faLinkedin, faFacebook, } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

export const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
]

export const projectList = [
    {
        title: "📚 Tiki Bookstore Clone",
        role: "Role: Team Leader / Frontend Developer",
        technologies: "React Vite, Typescript, TailwindCSS",
        description: "Description: A responsive e-commerce web application inspired by Tiki, designed for users to explore, interact with, and purchase books online. The project includes both a customer-facing interface and an admin dashboard for managing users, products, and orders. ",
        link: "https://cpl-fe-group.onrender.com",
    },
    {
        title: "📰 Blog Management Website",
        role: "Role: Scrum Master (Newbie) / Frontend Developer",
        technologies: "ReactJS, Javascript, Bootstrap",
        description: "Description: A blog management website that allows users to create, edit and delete blog posts. The project includes user authentication, a rich text editor for writing posts, and a responsive design.",
        link: "https://www.youtube.com/watch?v=Mm5GVGbZwSE",
    },
]

export const typewriterTexts = [
    'On the way to become a Full-Stack Web Developer',
    'Passionate about web performance.',
    'Crafting modern, scalable UI.',
]

export const socials = [
    {
        label: "GitHub",
        href: "https://github.com/minhdinh2504",
        icon: faGithub,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/lu-minh-b01828365/",
        icon: faLinkedin,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/minhlu25042003",
        icon: faFacebook,
    },
    {
        label: "Zalo",
        href: "https://zalo.me/0978882504",
        icon: faPhone,
    }
]