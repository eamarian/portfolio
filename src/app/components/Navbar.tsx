import Link from "next/link";

export default function Navbar() {
  const ResumeLink = (
    <a
      className="resume-link"
      href="/Evan_Marian_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );

  return (
    <nav>
      <ul>
        <li>
          <Link href={"/#home"}>Home</Link>
        </li>
        <li>
          <Link href={"/#about"}>About</Link>
        </li>
        <li>
          <Link href={"/#projects"}>Projects</Link>
        </li>
        <li>
          <Link href={"/#contact"}>Contact</Link>
        </li>
        <li>{ResumeLink}</li>
      </ul>
    </nav>
  );
}
