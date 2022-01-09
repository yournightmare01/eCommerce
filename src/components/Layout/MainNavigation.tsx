import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { LogoIcon } from '../icons';
import classes from './MainNavigation.module.scss';
import { Fragment, useState, useEffect } from 'react';

const MainNavigation = () => {
  const [cartItem, setCartItem] = useState<any[]>([]);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const localSotrageItems = localStorage.getItem('Item');

  useEffect(() => {
    if (!localSotrageItems) return;
    const localStorageItemsParsed = JSON.parse(localSotrageItems);

    setCartItem(localStorageItemsParsed);
  }, [localSotrageItems]); //cartItem radi ali pravi infinite loop :)

  return (
    <Fragment>
      <div
        className={
          sidebar ? `${classes.overlay} ${classes.show}` : classes.overlay
        }
        onClick={showSidebar}
      />
      <nav
        className={
          sidebar ? `${classes.sidebar} ${classes.active}` : classes.sidebar
        }
      >
        <div className={classes.cross} onClick={showSidebar}>
          <div className={classes.lines} />
        </div>
        <ul>
          <li>
            <NavLink to='/collections' onClick={showSidebar}>
              Collection
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' onClick={showSidebar}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' onClick={showSidebar}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className={classes.nav}>
        <div className={classes['nav-content']}>
          <div className={classes.hamburger} onClick={showSidebar}>
            <div className={classes.lines} />
          </div>

          <LogoIcon />
          <ul>
            <li>
              <NavLink to='/collections'>Collection</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.cart}>
          <Cart />
          <span className={classes.items}>{cartItem.length}</span>
          <li>
            <NavLink to='/login'>Log In</NavLink>
          </li>
        </div>
      </nav>
    </Fragment>
  );
};

export default MainNavigation;
