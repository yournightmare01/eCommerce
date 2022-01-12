import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { LogoIcon } from '../icons';
import classes from './MainNavigation.module.scss';
import { Fragment, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getAuth, signOut } from 'firebase/auth';
import { changeLoggedIn } from '../../features/setLogin/setLogin';

const MainNavigation = () => {
  const dispatch = useAppDispatch();
  const [sidebar, setSidebar] = useState(false);
  const { shopItems } = useAppSelector((state) => state.shopItems);

  const { isLoggedIn } = useAppSelector((state) => state.authCheck);

  const showSidebar = () => setSidebar(!sidebar);

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(changeLoggedIn(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            {isLoggedIn && (
              <NavLink onClick={logout} to='/login'>
                Log Out
              </NavLink>
            )}

            {!isLoggedIn && <NavLink to='/login'>Log In</NavLink>}
          </li>
        </div>
      </nav>
    </Fragment>
  );
};

export default MainNavigation;
