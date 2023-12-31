import style from './FilterSelect.module.scss';

const FilterSelect = () => {
  return (
    <select className={style.select} name="pets" id="pet-select">
      <option value="">Любой</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </select>
  );
};

export default FilterSelect;
