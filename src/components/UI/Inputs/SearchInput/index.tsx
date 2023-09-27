import { FC } from 'react';
import style from './SearchInput.module.scss';

const SearchInput: FC = () => {
  return (
    <div className={style.search}>
      <svg
        className={style.search_icon}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none">
        <circle
          cx="9.78639"
          cy="9.78604"
          r="8.23951"
          stroke="#192252"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.5156 15.9447L18.746 19.1667"
          stroke="#192252"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <input className={style.search_input} type="text" placeholder="Поиск" />
    </div>
  );
};

export default SearchInput;
