import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/favicon.ico";
import React from "react";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link className={styles.link} href="/" passHref legacyBehavior>
				<Image className={styles.logo} src={logo} alt=""></Image>
			</Link>
			<ol className={styles.navlinks}>
				<li className={styles.navitem}>
					<Link className={styles.link} href="/projects">
						Projects
					</Link>
				</li>
				<li className={styles.navitem}>
					<Link className={styles.link} href="/about-me">
						About Me
					</Link>
				</li>
				<li className={styles.navitem}>
					<Link className={styles.link} href="/resume">
						Resume
					</Link>
				</li>
				<li className={styles.navitem}>
					<Link className={styles.link} href="/contact-me">
						Contact Me
					</Link>
				</li>
			</ol>
		</nav>
	);
}
