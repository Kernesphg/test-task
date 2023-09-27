import { FC } from 'react';
import style from './FilterInput.module.scss';
interface filterInputProps {
  placeholder: number;
}
const FilterInput: FC<filterInputProps> = ({ placeholder }) => {
  return <input className={style.filter_input} type="text" placeholder={String(placeholder)} />;
};

export default FilterInput;
