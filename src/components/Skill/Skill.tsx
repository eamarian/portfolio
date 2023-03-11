import styles from "@/styles/Skill.module.css"

export type SkillProps = {
	name: string;
    level?: SkillLevel;
};

export default function Skill({name, level}: SkillProps){
    return (
    <div>
        <h1>{name}</h1>
            <div className={styles.levels}>
                {Object.values(SkillLevel).map((skillLevel) => <div className={styles.level}><div className={`${styles.bubble} ${(level === skillLevel)? styles.filled: ""}`}></div><p>{skillLevel}</p></div>)}
            </div>
    </div>)
}

export enum SkillLevel {
    Low = "Apprentice",
    MediumLow = "Journeyman",
    MediumHigh = "Expert",
    High = "Master"
}