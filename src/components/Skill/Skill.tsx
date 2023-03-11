import styles from "@/styles/Skill.module.css";

export type SkillProps = {
  name: string;
  level?: SkillLevel;
};

export default function Skill({ name, level }: SkillProps): JSX.Element {
  return (
    <div>
      <h3>{name}</h3>
      <div className={styles.levels}>
        {Object.values(SkillLevel).map((skillLevel) => (
          <div className={styles.level} key={skillLevel}>
            <div
              className={`${styles.bubble} ${
                level === skillLevel ? styles.filled : ""
              }`}
            ></div>
            <p>{skillLevel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export enum SkillLevel {
  LOW = "Apprentice",
  MEDIUM_LOW = "Journeyman",
  MEDIUM_HIGH = "Expert",
  HIGH = "Master",
}
