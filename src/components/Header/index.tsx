import SearchInput from '../UI/Inputs/SearchInput'
import Clock from '../UI/icons/Clock'
import Favorites from '../UI/icons/Favorites'
import Logo from '../UI/icons/Logo'
import style from './Header.module.scss'
import Navbar from './Navbar'
const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Navbar />
      <div className={style.header_search}>
        <SearchInput />
        <Favorites />
        <Clock />
      </div>
    </header>
  )
}

export default Header
