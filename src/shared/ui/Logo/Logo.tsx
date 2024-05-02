import style from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={style.logo}>
      <h3 className={style.logo__title}>
        Лого
      </h3>
    </div>
  )
}
