"use client"

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/favicon.ico";
import hamburger from "../../../public/hamburger-menu-icon.svg";
import React, {useState} from "react";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
	const [displaySidePanel, setDisplaySidePanel] = useState<boolean>(false);
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
				<li className={styles.navitem}>
					<Image className={styles.openbutton} onClick={() =>{setDisplaySidePanel(!displaySidePanel)}} src={hamburger} height={20} width={20} alt=""></Image>
				</li>
			</ol>
			<div className={styles.sidepanel} style={{width: (displaySidePanel ? "250px" : "0px")}}>
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
				</li></div>
		</nav>
	);
}
