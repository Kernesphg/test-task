import React from 'react';
import ConfirmationButton from '../UI/buttons/ConfirmationButton';
import ResetButton from '../UI/buttons/ResetButton';
import FilterGap from './FilterGap';
import FilterSelect from '../UI/selects/FilterSelect';
import style from './FilterBlock.module.scss';

const FilterBlock = () => {
  const apartmentsTypes = ['Студия', '1к', '2к', '3к', '4к'];
  const gapInputs = [
    { title: 'Стоимость  млн ₽', min: 0, max: 12 },
    { title: 'Площадь м2', min: 0, max: 13 },
    { title: 'Этаж', min: 0, max: 10 },
  ];
  const [apartmentsType, setApartmentsTypes] = React.useState(0);
  return (
    <div className={style.filterBlock}>
      <p className={style.title}>Лучшие предложения</p>
      <div className={style.filters}>
        <FilterSelect />
        <div>
          {apartmentsTypes.map((type, index) => (
            <ConfirmationButton
              index={index}
              apartmentsType={apartmentsType}
              onClick={() => setApartmentsTypes(index)}
              text={type}
              key={type}
            />
          ))}
        </div>

        {gapInputs.map((item) => (
          <FilterGap {...item} />
        ))}
        <FilterSelect />
        <FilterSelect />
        <div className={style.buttons}>
          <ConfirmationButton text={'Показать объекты'} />
          <ResetButton />
        </div>
      </div>
    </div>
  );
};

export default FilterBlock;
