import style from './socials.module.scss';
import { getIconStyle } from '../lib/getIconStyle';

export const SignOnSocials = () => {
  return (
    <section className={style.section}>
      <h5>Подписывайтесь на нас</h5>
      <div className={style.icons}>
        <a href="https://www.youtube.com/" target='_blank' className={style.icon__wrapper}>
          <span className={getIconStyle(style.icon__youtube)}></span>
        </a>
        <a href="https://linkedin.com/" target='_blank' className={style.icon__wrapper}>
          <span className={getIconStyle(style.icon__in)}></span>
        </a>
        <a href="https://myaccount.google.com/" className={style.icon__wrapper}>
          <span className={getIconStyle(style.icon__google)}></span>
        </a>
        <a href="#" className={style.icon__wrapper}>
          <span className={getIconStyle(style.icon__f)}></span>
        </a>
        <a href="https://twitter.com" className={style.icon__wrapper}>
          <span className={getIconStyle(style.icon__twitter)}></span>
        </a>
      </div>
    </section>
  )
}
