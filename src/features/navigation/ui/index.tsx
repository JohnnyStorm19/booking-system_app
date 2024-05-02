import { navigationContent } from "../model";
import style from './navigation.module.scss';

export const Navigation = () => {

  return (
    <nav className={style.nav}>
      <ul className={style.nav__items}>
        {navigationContent.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
