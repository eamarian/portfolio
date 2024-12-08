import { forwardRef } from "react";
import Project, { ProjectProps } from "./Project.tsx";
import projects from "./ProjectList.ts";

const Projects = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="projects" className="scroll-mt-[inherit] mb-10" ref={ref}>
      <h1 className="mb-10">Projects.</h1>
      <ul className="flex flex-col gap-5">
        {projects.map((projectProps: ProjectProps) => {
          return (
            <li key={projectProps.title}>
              <Project {...projectProps} />
            </li>
          );
        })}
      </ul>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
