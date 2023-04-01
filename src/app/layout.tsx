"use client";

import "@/styles/globals.css";
import styles from "@/styles/Layout.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  function getLinkClassName(href: string): string {
    if (pathName === href) {
      return `${styles.navitem} ${styles.current}`;
    } else {
      return `${styles.navitem}`;
    }
  }

  return (
    <html lang="en">
      <body>
        <section className={styles.right}>
          <nav className={styles.nav}>
            <ul className={styles.navitems}>
              <li className={getLinkClassName("/")}>
                <Link href={"/"}>About Me</Link>
              </li>
              <li className={getLinkClassName("/my-work")}>
                <Link href={"/my-work"}>My Work</Link>
              </li>
              <li className={getLinkClassName("/contact-me")}>
                <Link href={"/contact-me"}>Contact Me</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.browser}>
            <form
              action={`mailto:eamarian@gmail.com?subject=${encodeURIComponent(
                "test"
              )}`}
              method="GET"
              encType="text/plain"
            >
              {/* <input type="text" name="name" id="name" />
              <input type="text" name="subject" id="subject" />
              <textarea name="body" id="body" /> */}
              <input type="submit" value="Submit" />
            </form>
          </div>
        </section>
        <section>{children}</section>
      </body>
    </html>
  );
}
