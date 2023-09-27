import { FC } from 'react'
import FilterInput from '../../UI/Inputs/FilterInput'
import style from './FilterGap.module.scss'

interface filterGapProps {
  title: string
  min: number
  max: number
}

const FilterGap: FC<filterGapProps> = ({ title, min, max }) => {
  return (
    <div>
      <p>{title}</p>
      <div className={style.filter_gap}>
        <div className={style.input}>
          <FilterInput placeholder={min} />
        </div>
        <div className={style.input}>
          <FilterInput placeholder={max} />
        </div>
      </div>
    </div>
  )
}

export default FilterGap
