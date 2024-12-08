import { ProjectProps } from "./Project";

const projects: ProjectProps[] = [
  {
    title: "Wonk",
    description: "A full stack web application for tracking public policy.",
    image: "/placeholder.svg",
    link: new URL("https://www.google.com/"),
    githubLink: new URL("https://github.com/eamarian/Wonk"),
    tags: ["Python", "Django", "PostgreSQL", "OAuth"],
  },
  {
    title: "Drawn From Steel",
    description:
      "A multi-platform hero building application for the MCDM Productions tabletop role-playing game Draw Steel with support for web, android, and iOS.",
    link: undefined,
    githubLink: new URL("https://github.com/eamarian/drawn-from-steel"),
    tags: [
      "JavaScript",
      "HTML5",
      "CSS",
      "React",
      "Sass",
      "Next.js",
      "NextAuth.js",
      "MUI",
      "Kotlin",
      "Jetpack Compose",
      "Swift",
      "PostgreSQL",
    ],
  },
  {
    title: "2024 Appalachian Trail Thru Hike",
    description:
      "A data visualization project of my personal 2024 thru hike of the Appalachian Trail using Jupyter Notebook.",
    tags: ["Python", "Jupyter Notebook"],
  },
];

export default projects;
