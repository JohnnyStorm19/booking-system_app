import style from './ClientsReview.module.scss';
import { ReviewsSwiper } from './reviews-swiper/ReviewsSwiper';

export const ClientsReview = () => {

  return (
    <section className={style.section__container} id='reviews'>
      <header>
        <h4 className={style.section__title}>Отзывы</h4>
      </header>
      <main>
        <ReviewsSwiper />
      </main>
    </section>
  )
}