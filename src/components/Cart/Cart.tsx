import classes from './Cart.module.scss';
import { CartIcon, DeleteIcon } from '../icons';
import { useEffect, useState } from 'react';
import Button from '../UI/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProductData } from '../../features/getProductsData/produtDataSlice';
import { addToCart } from '../../features/setShiopItems/setShopItems';

const Cart = () => {
  const dispatch = useAppDispatch();
  const [shown, setIsShown] = useState(false);
  const { shopItems } = useAppSelector((state) => state.shopItems);

  const modalToggleHandler = () => {
    setIsShown(!shown);
  };

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  const removeItemFromCart = (item: any) => {
    const newCartItem = shopItems.filter((clickedItem) => clickedItem !== item);
    dispatch(addToCart(newCartItem));
    localStorage.setItem('Item', JSON.stringify(newCartItem));
  };

  return (
    <div className={classes.cart}>
      {shown && (
        <div className={classes['cart-open']}>
          <div className={classes['cart-open--name']}>
            <h3>Cart</h3>
          </div>
          <div className={classes['cart-open--items']}>
            {shopItems.length === 0 && (
              <h4 className={classes.empty}>Your cart is empty.</h4>
            )}

            {shopItems.length > 0 &&
              shopItems.map((item: any) => {
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
                    <div
                      className={classes['cart__item--delete']}
                      onClick={() => removeItemFromCart(item)}
                    >
                      <DeleteIcon />
                    </div>
                  </div>
                );
              })}
            {shopItems.length > 0 && (
              <div className={classes['cart-open--items--button']}>
                <Button>Checkout</Button>
              </div>
            )}
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
