import { ProjectProps } from "./Project";

const projects: ProjectProps[] = [
  {
    title: "Wonk",
    description: "A full stack web application for tracking public policy.",
    image: "/placeholder.svg",
    link: new URL("https://www.google.com/"),
    githubLink: new URL("https://github.com/eamarian"),
    tags: ["Python", "Django", "PostgreSQL", "OAuth"],
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime quia distinctio aliquam assumenda omnis tempore dignissimos sapiente necessitatibus. Omnis.",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime quia distinctio aliquam assumenda omnis tempore dignissimos sapiente necessitatibus. Omnis.",
  },
];

export default projects;
