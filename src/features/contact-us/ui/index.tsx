import style from "./contactUs.module.scss";

import { getIconStyle } from "../lib";

export const ContactUs = () => {
  return (
    <section className={style.section}>
      <h5>Свяжитесь с нами</h5>
      <div className={style.contacts}>
        <a href="tel:88000000000" className={style.contact}>
          <span className={getIconStyle(style.icon__phone)}></span>8 (800) 000
          00 00
        </a>
        <a href="mailto:inbox@mail.ru" className={style.contact}>
          <span className={getIconStyle(style.icon__mail)}></span>
          inbox@mail.ru
        </a>
        <a href="tu.train.tickets" className={style.contact}>
          <span className={getIconStyle(style.icon__skype)}></span>
          tu.train.tickets
        </a>
        <a
          href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F,+27,+35,+%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+142350/@55.254695,37.491824,17z/data=!3m1!4b1!4m5!3m4!1s0x41355b6dfb4a1931:0x79bd65eb99c6e0e8!8m2!3d55.254695!4d37.491824?entry=ttu"
          target="_blank"
          className={style.contact}
        >
          <span className={getIconStyle(style.icon__geo)}></span>
          г. Москва ул. Московская 27-35 555 555
        </a>
      </div>
    </section>
  );
};
