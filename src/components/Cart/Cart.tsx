import classes from './Cart.module.scss';
import { CartIcon } from '../icons';
import { useEffect, useState } from 'react';
import Button from '../UI/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProductData } from '../../features/getProductsData/produtDataSlice';

const Cart = () => {
  const dispatch = useAppDispatch();
  const [shown, setIsShown] = useState(false);
  const [owo, setOwo] = useState<any[]>([]);

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  const modalToggleHandler = () => {
    setIsShown(!shown);
  };

  useEffect(() => {
    const arg = localStorage.getItem('Item');
    if (!arg) return;
    const uwu = JSON.parse(arg);
    setOwo(uwu);
  }, []);

  return (
    <div className={classes.cart}>
      {shown && (
        <div className={classes['cart-open']}>
          <div className={classes['cart-open--name']}>
            <h3>Cart</h3>
          </div>
          <div className={classes['cart-open--items']}>
            {owo.length === 0 && <h4>Your cart is empty.</h4>}
            {owo.map((item: any) => {
              return (
                <div className={classes.cart__item} key={item.id}>
                  <span className={classes['cart__item--imageContainer']}>
                    <img src={item.image} alt='grr' />
                  </span>
                  <div className={classes['cart__item--text']}>
                    <span>{item.title.substring(0, 22)}...</span>
                    <div>
                      <span>
                        {(
                          (item.price.amount / item.price.divisor / 10) *
                          9
                        ).toFixed(2)}{' '}
                        x {item.amount}
                      </span>
                      <span className={classes['cart__item--text--bold']}>
                        {(
                          (item.price.amount / item.price.divisor / 10) *
                          9 *
                          item.amount
                        ).toFixed(2)}{' '}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
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
