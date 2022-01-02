import classes from './Cart.module.scss';
import { CartIcon } from '../icons';
import { useEffect, useState } from 'react';
import itemImage from '../../images/itemImage.jpg';
import Button from '../UI/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getCartItems } from '../../features/getCartItems/getCartItems';

const Cart = () => {
  const { cartItems } = useAppSelector((state) => state.cartItems);
  const dispatch = useAppDispatch();
  const [shown, setIsShown] = useState(false);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const modalToggleHandler = () => {
    setIsShown(!shown);
  };

  console.log(cartItems);

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
              <Button>Checkout</Button>
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
