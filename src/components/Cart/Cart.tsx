import classes from './Cart.module.scss';
import { CartIcon } from '../icons';
import { useState } from 'react';
import itemImage from '../../images/itemImage.jpg';

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
            {/* <h4>Your cart is empty.</h4> */}
            <div className={classes.cart__item}>
              <span className={classes['cart__item--imageContainer']}>
                <img src={itemImage} alt='grr' />
              </span>
              <div className={classes['cart__item--text']}>
                <span>Title</span>
                <div>
                  <span>Price x Amount</span>
                  <span className={classes['cart__item--text--bold']}>
                    Total Price
                  </span>
                </div>
              </div>
            </div>
            <div className={classes['cart-open--items--button']}>
              <button className={classes['add-to-cart']}>Add to cart</button>
            </div>
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
