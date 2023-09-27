import ArrowDown from '../../UI/icons/ArrowDown'
import styles from './Navbar.module.scss'

const navbarItems: { title: string; isDropDown: boolean }[] = [
  { title: 'Каталог', isDropDown: true },
  { title: 'Вакансии', isDropDown: true },
  { title: 'Новости', isDropDown: true },
  { title: 'Ипотека', isDropDown: false },
  { title: 'О нас', isDropDown: false },
  { title: 'Контакты', isDropDown: false },
]

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {navbarItems.map(navbarItem =>
        navbarItem.isDropDown ? (
          <p className={styles.dropDown}>
            {navbarItem.title}
            <ArrowDown />
          </p>
        ) : (
          <a>{navbarItem.title}</a>
        ),
      )}
    </div>
  )
}

export default Navbar
