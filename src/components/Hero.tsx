import Image from "next/image";
import TypeIt from "typeit-react";
import { default as TypeItCore } from "typeit";
import { forwardRef, MouseEventHandler, useState, CSSProperties } from "react";

interface HeroProps {
  setCanScroll: (canScroll: boolean) => void;
}

const titles: { title: string; color: CSSProperties["color"] }[] = [
  { title: "Nature Lover", color: "green" },
  { title: "Caffeine Addict", color: "violet" },
  { title: "Book Worm", color: "brown" },
  { title: "Dog Dad", color: "orange" },
  { title: "Game Freak", color: "red" }, //I don't know if I like this one...
  { title: "Software Developer", color: "violet" },
];

const Hero = forwardRef<HTMLElement, HeroProps>((props, ref) => {
  const [animationIsComplete, setAnimationIsComplete] =
    useState<boolean>(false);

  const onClick: MouseEventHandler<HTMLAnchorElement> = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent> // eslint-disable-line @typescript-eslint/no-unused-vars
  ) => {
    props.setCanScroll(true);
  };
  return (
    <section
      id="home"
      className="flex flex-auto flex-col items-center text-center sp gap-5 h-screen"
      ref={ref}
    >
      <div></div>
      <Image
        src="/profile.svg"
        alt="Profile picture"
        priority={true}
        width={180}
        height={180}
      ></Image>
      <TypeIt
        as="p"
        options={{
          //lifeLike: true,
          speed: 100,
          afterComplete: (instance: TypeItCore) => {
            instance.destroy();
            setAnimationIsComplete(true);
          },
        }}
        getBeforeInit={(instance) => {
          instance
            .type("Hi, ")
            .type("I'm <em style='color:red'>Evan Marian</em>.")
            .pause(500)
            .break()
            .type("I'm a ");
          titles.map((value, index) => {
            instance
              .type(`<em style='color:${value.color}'>${value.title}</em>`)
              .pause(200);

            if (index < titles.length - 1) instance.delete(value.title.length);
          });
          return instance;
        }}
      ></TypeIt>
      {
        <a
          className={`transition-opacity duration-1000 ${
            animationIsComplete ? "opacity-100" : "opacity-0"
          }`}
          href={animationIsComplete ? "#about" : ""}
          onClick={onClick}
        >
          Find Out More
        </a>
      }
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
