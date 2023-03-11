import React, { FunctionComponent } from "react";
import { Tag } from "../../utils/Tag";
import Image from "next/image";
import styles from "../../styles/Project.module.css";

export type ProjectProps = {
  title: string;
  description: string;
  img: string;
  tags: Tag[];
};
export default function Project({
  title,
  description,
  img,
  tags,
}: ProjectProps): JSX.Element {
  return (
    <div className={styles.project}>
      <Image
        className={styles.image}
        src={img}
        alt=""
        quality={100}
        fill
        sizes="100vw"
      ></Image>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className={styles.tags}>
        {tags.map((tag: Tag) => (
          <button className={styles.tag} key={tag}>
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
