import { useSwiper } from 'swiper/react';
import '../../../../../styles/index.scss';
import style from './SwiperButtons.module.scss';

const Buttons = () => {
  const swiper = useSwiper();
  return (
    <div className={style.slider_button__block}>
      <button className={style.slider_button__item} onClick={() => swiper.slidePrev()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none">
          <path
            d="M10.0586 13.28L5.71193 8.9333C5.19859 8.41997 5.19859 7.57997 5.71193 7.06664L10.0586 2.71997"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button className={style.slider_button__item} onClick={() => swiper.slideNext()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none">
          <path
            d="M5.94141 13.28L10.2881 8.9333C10.8014 8.41997 10.8014 7.57997 10.2881 7.06664L5.94141 2.71997"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Buttons;
