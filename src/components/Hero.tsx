import {
  forwardRef,
  MouseEventHandler,
  useRef,
  useEffect,
  RefObject,
} from "react";

interface HeroProps {
  setCanScroll: (canScroll: boolean) => void;
}

const fontSizeREM: number = 5; //TODO: Review this constant. This should probably be queried for instead...

const titles: { title: string; colorClassName: string }[] = [
  { title: "Nature Lover", colorClassName: "text-green-500" },
  { title: "Caffeine Addict", colorClassName: "text-violet-500" },
  { title: "Book Worm", colorClassName: "text-amber-500" },
  { title: "Dog Dad", colorClassName: "text-orange-500" },
  { title: "Game Freak", colorClassName: "text-red-500" }, //I don't know if I like this one...
  { title: "Software Developer", colorClassName: "text-blue-500" },
];

const buildAnimation = (): {
  keyframes: Keyframe[];
  options: KeyframeAnimationOptions;
} => {
  const holdRatio: number = 3;

  const offsetStep: number = 1 / ((holdRatio + 1) * titles.length);

  const keyframes: Keyframe[] = new Array<Keyframe>(titles.length * 2 + 1);

  let offset: number = 0;
  let top: number = 0;
  for (let i: number = 0; i < keyframes.length - 2; i += 2) {
    keyframes[i] = { offset: offset, top: `${top}rem`, easing: "ease" }; //Transition
    keyframes[i + 1] = {
      offset: (offset += offsetStep * holdRatio),
      top: `${top}rem`,
      easing: "ease",
    }; //Hold

    offset += offsetStep;
    top -= fontSizeREM;
  }

  keyframes[keyframes.length - 1] = { offset: 1, top: `${top}rem` };

  return {
    keyframes: keyframes,
    options: {
      duration: titles.length * 1500,
      iterations: Infinity,
    },
  };
};

const animation: { keyframes: Keyframe[]; options: KeyframeAnimationOptions } =
  buildAnimation();

const Hero = forwardRef<HTMLElement, HeroProps>((props, ref) => {
  const onClick: MouseEventHandler<HTMLAnchorElement> = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent> // eslint-disable-line @typescript-eslint/no-unused-vars
  ) => {
    props.setCanScroll(true);
  };

  const titlesRef: RefObject<HTMLSpanElement> = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (titlesRef.current) {
      titlesRef.current.animate(animation.keyframes, animation.options);
    }
  }, []);

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
            <div
              className={`rotate-text overflow-hidden h-[5rem] h-[${fontSizeREM}rem]`}
            >
              <span className="relative uppercase" ref={titlesRef}>
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
