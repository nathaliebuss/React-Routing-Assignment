import { useState} from 'react'
import { NavLink} from 'react-router-dom'
import icon from "../../assets/Images/icon.png";     //invincible icon
import burgerIcon from '../../assets/Images/menu.png'   //burger menu icon
import style from './navbar.module.css'


const Navbar = () => {
    const [showDropMenu, setShowDropMenu] = useState(false)
    const [showBurgerMenu, setShowBurgerMenu] = useState(false)     //buger menu state, false=standard not showing

        // burger menu handleClick
    const toggleBurgerMenu = () => { 
        setShowBurgerMenu(!showBurgerMenu);
    }
    // drop down menu handleClick
    const dropMenuClick = () => {
        setShowDropMenu(!showDropMenu)
    }

    // closing after clicking the (burger)menu
    const closeAll = () => {
        setShowBurgerMenu(false);
        setShowDropMenu(false);
    };

    return (
        <>
          <header className={style.headerContainer}>
            <div className={style.iconSection}>
                <img
                  className={style.iconImage}
                  src={icon}
                  alt="guy in a blue, black and yellow suit with black hair"
                  width="200px"
                  height="200px"
                />
                <h1 className={style.title}>Invincible Website</h1>
                    <button className={style.hamburgerMenu} onClick={toggleBurgerMenu}>
                    {showBurgerMenu ? '✕' : <img src={burgerIcon} alt="menu" className={style.burgerImg} />}
                    </button>
                </div>

                <div className={style.navbar}>
                    <nav className={`${style.navContainer} ${showBurgerMenu ? style.navOpen : "" }`}>
                        <NavLink className={({ isActive }) => isActive ? style.active : style.navItem} to="/" onClick={closeAll}>Home</NavLink>

                        <div className={`${style.dropMenu} ${style.dropMenuTrigger}`}>
                        <p className={style.navItem} onClick={dropMenuClick} >Characters</p>
                            {showDropMenu && 
                                <div className={style.dropMenu}>
                                    <NavLink className={({ isActive }) => isActive ? style.active : style.navItem} to="/characters/heroes" onClick={closeAll}>Heroes</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? style.active : style.navItem} to="/characters/enemies" onClick={closeAll}>Enemies</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? style.active : style.navItem} to="/characters/all-characters" onClick={closeAll}>All Characters</NavLink>
                                </div>
                            }
                        </div>
                        <NavLink className={({ isActive }) => isActive ? style.active : style.navItem} to="/about" onClick={closeAll}>About</NavLink>
                    </nav>
                </div>
              </header>
              
        </>
    )
}
export default Navbar