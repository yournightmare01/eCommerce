import { NavLink, Link } from 'react-router-dom';
import { CartIcon, LogoIcon } from '../icons';
import classes from './MainNavigation.module.scss';
import avatarImg from '../../images/image-avatar.png';
import { useState } from 'react';

const MainNavigation = () => {
  const [shown, setIsShown] = useState(false);
  const modalToggleHandler = () => {
    setIsShown(!shown);
  };

  return (
    <nav className={classes.nav}>
      <div>
        <LogoIcon />
        <ul>
          <li onClick={modalToggleHandler}>
            <Link to='/'>Home</Link>
            {shown && (
              <div className={classes.modal}>
                <span className={classes.modalText}>
                  <Link to='men'>Man</Link>
                </span>
                <span className={classes.modalText}>
                  <Link to='women'>Women</Link>
                </span>
              </div>
            )}
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
