import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";

export interface ProjectProps {
  title: string;
  description: string;
  image?: Url;
  link?: Url;
  githubLink?: Url;
  tags?: string[];
}

export default function Project(props: ProjectProps) {
  return (
    <div className="flex gap-5">
      <div>
        <Image
          src={props.image ? props.image.toString() : "/placeholder.svg"}
          alt={props.title}
          height={200}
          width={200}
        />
      </div>
      <div className="flex flex-col gap-5">
        <a
          href={props.link?.toString()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="inline-block">{props.title}</h2>
        </a>
        <p>{props.description}</p>
        {props.tags && (
          <span className="flex justify-between">
            <ul className="flex gap-2">
              {props.tags.map((tag: string) => {
                return (
                  <li
                    className="flex items-center outline rounded-full px-3 py-1 text-xs"
                    key={tag}
                  >
                    {tag}
                  </li>
                );
              })}
            </ul>
            {props.githubLink && (
              <a
                href={props.githubLink.toString()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/github.svg"}
                  alt="Github link"
                  height={32}
                  width={32}
                  className="inline-block"
                />
              </a>
            )}
          </span>
        )}
      </div>
    </div>
  );
}
