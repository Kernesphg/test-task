import style from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <p>
        Каталог
        <svg
          className={style.arrow}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none">
          <path
            d="M9.95906 4.475L6.69906 7.735C6.31406 8.12 5.68406 8.12 5.29906 7.735L2.03906 4.475"
            stroke="#192252"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </p>
      <p>
        Вакансии
        <svg
          className={style.arrow}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none">
          <path
            d="M9.95906 4.475L6.69906 7.735C6.31406 8.12 5.68406 8.12 5.29906 7.735L2.03906 4.475"
            stroke="#192252"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </p>
      <p>
        Новости
        <svg
          className={style.arrow}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none">
          <path
            d="M9.95906 4.475L6.69906 7.735C6.31406 8.12 5.68406 8.12 5.29906 7.735L2.03906 4.475"
            stroke="#192252"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </p>
      <a>Ипотека</a>
      <a>О нас</a>
      <a>Контакты</a>
    </div>
  );
};

export default Navbar;
