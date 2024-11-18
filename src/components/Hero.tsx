import { forwardRef, MouseEventHandler } from "react";

interface HeroProps {
  setCanScroll: (canScroll: boolean) => void;
}

const titles: { title: string; colorClassName: string }[] = [
  { title: "Nature Lover", colorClassName: "text-green-500" },
  { title: "Caffeine Addict", colorClassName: "text-violet-500" },
  { title: "Book Worm", colorClassName: "text-amber-500" },
  { title: "Dog Dad", colorClassName: "text-orange-500" },
  { title: "Game Freak", colorClassName: "text-red-500" }, //I don't know if I like this one...
  { title: "Software Developer", colorClassName: "text-blue-500" },
];

const Hero = forwardRef<HTMLElement, HeroProps>((props, ref) => {
  const onClick: MouseEventHandler<HTMLAnchorElement> = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent> // eslint-disable-line @typescript-eslint/no-unused-vars
  ) => {
    props.setCanScroll(true);
  };
  return (
    <section
      id="home"
      className="flex flex-auto flex-col items-center sp gap-0 h-screen"
      ref={ref}
    >
      <div className="outer-headings">
        <h1>
          Hi, <br />
          I&apos;m Evan Marian.
          <br />
          <div className="line">
            <div className="static-text">{"I'm a "}</div>
            <div className="rotate-text">
              <span>
                {titles.map(({ title, colorClassName }, index) => {
                  return (
                    <span key={index} className={colorClassName}>
                      {title}.
                      <br />
                    </span>
                  );
                })}
                <span key={0} className={titles[0].colorClassName}>
                  {titles[0].title}.<br />
                </span>
              </span>
            </div>
          </div>
        </h1>
      </div>
      {
        <a className="animate-bounce" href={"#about"} onClick={onClick}>
          Find Out More
        </a>
      }
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
