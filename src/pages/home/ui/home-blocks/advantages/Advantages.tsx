import style from './Advantages.module.scss';

import { MyButton } from "../../../../../shared/ui"
import { advantagesContent } from '../../../model';

export const Advantages = () => {
    const getIconStyle = (item: typeof advantagesContent[0]) => {
        return {
            display: 'block',
            backgroundImage: `url(${item.icon})`,
            backgroundSize: '10rem',
            width: '10rem',
            height: '10rem', 
        }
    }


  return (
    <section className={style.section__container} id='advantages'>
        <div className={style.section__wrapper}>
            <header className={style.section__header}>
                <h4 className={style.section__title}>Как это работает</h4>
                <MyButton className={style.header__btn} btnVariant="dark" childrenVariant="capitalized" handler={() => console.log('Узнать больше!')}>
                    Узнать больше
                </MyButton>
            </header>
            <main className={style.icons__container}>
                {advantagesContent.map(item => {
                    const iconStyle = getIconStyle(item)
                    return (
                    <div key={item.id} className={style.icon__wrapper}>
                        <span style={iconStyle}></span>
                        <p className={style.icon__text}>{item.text}</p>
                    </div>
                    )
                })}
            </main>
        </div>
    </section>
  )
}