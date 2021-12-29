import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { LogoIcon } from '../icons';
import classes from './MainNavigation.module.scss';
import avatarImg from '../../images/image-avatar.png';

const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      <div>
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
      <div>
        <Cart />
        <span className={classes['nav--imageContainer']}>
          <img src={avatarImg} alt='user' />
        </span>
      </div>
    </nav>
  );
};

export default MainNavigation;
