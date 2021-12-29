import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { LogoIcon } from '../icons';
import classes from './MainNavigation.module.scss';
import avatarImg from '../../images/image-avatar.png';
import Hamburger from '../UI/Hamburger';

const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes['nav-content']}>
        <Hamburger />
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
        <img src={avatarImg} alt='user' />
      </div>
    </nav>
  );
};

export default MainNavigation;
