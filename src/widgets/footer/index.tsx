import style from './footer.module.scss';

import { ContactUs, SignOnSocials, SignUp } from '../../features'

export const Footer = () => {
  return (
    <footer className={style.footer} id='contacts'>
        <ContactUs />
        <div className={style.wrapper}>
          <SignUp />
          <SignOnSocials />
        </div>
    </footer>
  )
}
