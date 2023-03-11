import Skill, { SkillLevel } from "@/components/Skill/Skill";
import styles from "@/styles/AboutMe.module.css";

export default function AboutMePage() {
  return (
    <div className={styles.aboutme}>
      <h1>About Me</h1>
      <div className={styles.sections}>
        <section>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis porro dolorem iste natus quas voluptate harum ullam ab
            non officia? Id, consequuntur. Officiis in qui alias molestiae
            cupiditate. Facilis, debitis.
          </p>
          <button>Contact Me</button>
          <button>my Resume</button>
        </section>
        <section className={styles.skills}>
          <h2>Skills</h2>
          <Skill name="Skill 1" level={SkillLevel.LOW}></Skill>
          <Skill name="Skill 2" level={SkillLevel.MEDIUM_HIGH}></Skill>
        </section>
      </div>
    </div>
  );
}
