interface NavbarProps {
  homeIsVisible: boolean;
  aboutIsVisible: boolean;
  projectsIsVisible: boolean;
  contactIsVisible: boolean;
}

export default function main(props: NavbarProps) {
  //const focusStyle = "hover:underline transition duration-1000";
  /*"hover:underline  hover:transition-all hover:duration-500 focus:underline focus:transition-all duration-500";*/
  const focusStyle = "underline";

  return (
    <nav className="sticky top-0 bg-purple-200">
      <ul className="flex justify-center gap-8">
        <li className={props.homeIsVisible ? focusStyle : undefined}>
          <a href="#home">Home</a>
        </li>
        <li className={props.aboutIsVisible ? focusStyle : undefined}>
          <a href="#about">About</a>
        </li>
        <li className={props.projectsIsVisible ? focusStyle : undefined}>
          <a href="#projects">Projects</a>
        </li>
        <li className={props.contactIsVisible ? focusStyle : undefined}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
