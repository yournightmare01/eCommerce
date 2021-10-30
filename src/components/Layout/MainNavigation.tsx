import { NavLink } from 'react-router-dom';
import { CartIcon, LogoIcon } from '../icons';
import classes from './MainNavigation.module.scss';
import avatarImg from '../../images/image-avatar.png';

const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <LogoIcon />
        <ul>
          <li>
            <NavLink to='collections'>Collections</NavLink>
          </li>
          <li>
            <NavLink to='men'>Men</NavLink>
          </li>
          <li>
            <NavLink to='women'>Women</NavLink>
          </li>
          <li>
            <NavLink to='about'>About</NavLink>
          </li>
          <li>
            <NavLink to='contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <CartIcon />
        <img src={avatarImg} alt='user' />
      </div>
    </nav>
  );
};

export default MainNavigation;
