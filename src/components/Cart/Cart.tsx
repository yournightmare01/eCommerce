import classes from './Cart.module.scss';
import { CartIcon } from '../icons';
import { useState } from 'react';

const Cart = () => {
  const [shown, setIsShown] = useState(false);

  const modalToggleHandler = () => {
    setIsShown(!shown);
  };

  return (
    <div className={classes.cart}>
      {shown && (
        <div className={classes['cart-open']}>
          <div className={classes['cart-open--name']}>
            <h3>Cart</h3>
          </div>
          <div className={classes['cart-open--items']}>
            <h4>Your cart is empty.</h4>
            <button className={classes['add-to-cart']}>Add to cart</button>
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
  );
};

export default Cart;
