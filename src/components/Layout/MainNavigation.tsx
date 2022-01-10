import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { LogoIcon } from '../icons';
import classes from './MainNavigation.module.scss';
import { Fragment, useState } from 'react';
import { useAppSelector } from '../../store/hooks';

const MainNavigation = () => {
  const [sidebar, setSidebar] = useState(false);
  const { shopItems } = useAppSelector((state) => state.shopItems);

  const showSidebar = () => setSidebar(!sidebar);

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
            <NavLink
              to='/collections'
              onClick={showSidebar}
              activeClassName={classes.reee}
            >
              Collection
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              onClick={showSidebar}
              activeClassName={classes.reee}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              onClick={showSidebar}
              activeClassName={classes.reee}
            >
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
              <NavLink to='/collections' activeClassName={classes.reee}>
                Collection
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' activeClassName={classes.reee}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' activeClassName={classes.reee}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.cart}>
          <Cart />
          <span className={classes.items}>{shopItems.length}</span>
          <li>
            <NavLink to='/login'>Log In</NavLink>
          </li>
        </div>
      </nav>
    </Fragment>
  );
};

export default MainNavigation;
