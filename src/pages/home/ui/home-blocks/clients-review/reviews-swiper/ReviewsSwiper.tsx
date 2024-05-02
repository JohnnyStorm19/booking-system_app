import { Swiper, SwiperSlide } from "swiper/react";
import style from "./ReviewsSwiper.module.scss";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

import { Pagination } from "swiper/modules";
import { clientsReviewContent } from "../../../../model/clientsReviewContent";

export const ReviewsSwiper = () => {
  const getAvatarStyle = (item: (typeof clientsReviewContent)[0]) => {
    return {
      display: "block",
      flex: "0 0 auto",
      backgroundImage: `url(${item.img})`,
      backgroundSize: "12.875rem",
      width: "12.875rem",
      height: "12.875rem",
    };
  };
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {clientsReviewContent.map((item) => {
        const avatarStyle = getAvatarStyle(item);
        return (
          <SwiperSlide key={item.id}>
            <div className={style.client__wrapper}>
              <span style={avatarStyle}></span>
              <div className={style.info__wrapper}>
                <h4>{item.name}</h4>
                <q>{item.review}</q>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
