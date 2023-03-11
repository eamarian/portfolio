import type { Metadata } from "next";
import styles from "@/styles/Home.module.css";

export const metadata: Metadata = {
  title: "Evan Marian",
  description: "",
  icons: "/favicon.ico",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.columns}>
        <div className={`${styles.column} ${styles.column1}`}>
          <div className={styles.title}>Greeting, Name.</div>
          <div className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            deserunt, repudiandae, doloremque vero hic excepturi sint possimus
            aliquam provident reprehenderit porro amet, labore ipsam beatae
            exercitationem. Velit corrupti ea vitae?
          </div>
          <button className={`${styles.primary} ${styles.solid}`}>
            See my work
          </button>
          <button className={`${styles.primary} ${styles.hollow}`}>
            my Resume
          </button>
        </div>
        <div className={`${styles.column} ${styles.column2}`}>
          <div className={styles.title}>Column 2</div>
        </div>
      </div>
    </main>
  );
}
