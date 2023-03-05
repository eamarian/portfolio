import styles from "@/styles/Projects.module.css";
import Head from "next/head";
import Project from "@/components/Project/Project";
import { ProjectProps } from "@/components/Project/Project";
import projects from "../../utils/projects";
import Navbar from "@/components/Navbar/Navbar";

export default function ProjectsPage() {
	return (
		<main>
			<div className={styles.title}>Projects.</div>
			<div className={styles.projects}>
				{projects.map((projectProps: ProjectProps, i) => (
					<Project {...projectProps} key={i}></Project>
				))}
			</div>
		</main>
	);
}
