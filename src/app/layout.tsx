import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import styles from "@/styles/RootLayout.module.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="eng">
			<body className={styles.body}>
				<Navbar></Navbar>
				{children}
			</body>
		</html>
	);
}
