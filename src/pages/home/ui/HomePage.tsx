import { About, Advantages, ClientsReview, Hero } from './home-blocks';
import style from './home.module.scss';



export const HomePage = () => {
  return (
    <div className={style.wrapper}>
      <Hero />
      <About />
      <Advantages />
      <ClientsReview />
    </div>
  )
}
