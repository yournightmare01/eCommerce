import { NavLink } from 'react-router-dom';
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
          <li>
            <NavLink to='collections'>Collection</NavLink>
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
        <div className={classes.cart}>
          {shown && (
            <div className={classes['cart-open']}>
              <div className={classes['cart-open--name']}>
                <h3>Cart</h3>
              </div>
              <div className={classes['cart-open--items']}>
                <h4>Your cart is empty.</h4>
              </div>
            </div>
          )}
          <span
            onClick={() => {
              modalToggleHandler();
            }}
          >
            <CartIcon />
          </span>
        </div>
        <img src={avatarImg} alt='user' />
      </div>
    </nav>
  );
};

export default MainNavigation;
