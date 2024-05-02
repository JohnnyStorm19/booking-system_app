import style from "./About.module.scss";

import { textContent } from "../../../model";

export const About = () => {
  return (
    <section className={style.about__container} id="about">
        <div className={style.about__contentWrapper}>
            <h4 className={style.about__title}>О нас</h4>
            <div className={style.about__textContainer}>
                {textContent.map(text => <p key={text.id}>{text.text}</p> )}
            </div>
        </div>
    </section>
  );
};

