import Buttons from './SwiperButtons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import style from './MainSlider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MainSlider = () => {
  const slides = [
    {
      img: 'src\u002Fassets\u002Fimg\u002FGroup 1.png',
      title: 'Подбор и покупка недвижимости в Москве и Подмосковье',
      alt: 'недвижка',
    },
    {
      img: 'https://w.forfun.com/fetch/5c/5c667b51332990f7af3d3b20b4548883.jpeg?w=1470&r=0.5625',
      title: 'Подбор и покупка недвижимости в Москве и Подмосковье',
      alt: 'лиса',
    },
    {
      img: 'https://w.forfun.com/fetch/14/140117daf093639c26b6726e4241de34.jpeg',
      title: 'Подбор и покупка недвижимости в Москве и Подмосковье',
      alt: 'замок',
    },
    {
      img: 'https://w.forfun.com/fetch/1f/1ff02e3ba9cecf53fa276611f21c6881.jpeg',
      title: 'Подбор и покупка недвижимости в Москве и Подмосковье',
      alt: 'море',
    },
  ];

  return (
    <>
      <Swiper
        className={style.main_swiper}
        modules={[Navigation, A11y]}
        spaceBetween={0}
        loop
        slidesPerView={1}>
        {slides.map(({ img, title, alt }) => (
          <SwiperSlide key={img}>
            <span className={style._span}>{title}</span>
            <img className={style._slide} src={img} alt={alt} />
          </SwiperSlide>
        ))}
        <Buttons />
      </Swiper>
    </>
  );
};

export default MainSlider;
