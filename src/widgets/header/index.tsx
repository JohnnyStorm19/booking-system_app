import style from './header.module.scss';

import { Logo } from "../../shared/ui"
import { Navigation } from '../../features';

export const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Navigation />
    </header>
  )
}
