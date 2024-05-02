import { TicketForm } from "../../../../../widgets/ticket-form";
import style from "./Hero.module.scss";

export const Hero = () => {
  return (
    <div className={style.hero__container}>
      <div className={style.ticket_form__wrapper}>
        <h1 className={style.hero__title}>
          Вся жизнь - <strong>путешествие!</strong>
        </h1>
        <TicketForm />
      </div>
      <div className={style.hero__divider}></div>
    </div>
  );
};
