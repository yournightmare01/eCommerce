import { useEffect, useState } from 'react';
import { CloseIcon } from '../components/icons';
import Button from '../components/UI/Button';
import { addToCart } from '../features/setShiopItems/setShopItems';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import classes from './Checkout.module.scss';

const Checkout = () => {
  const { shopItems } = useAppSelector((state) => state.shopItems);
  const [totalAmount, setTotalAmount] = useState<any>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const reducer = (accumulator: number, curr: number) => accumulator + curr;
    let priceArr: number[] = [];
    shopItems.map((item: any) => {
      priceArr.push(
        (item.price.amount / item.price.divisor / 10) * 9 * item.amount
      );
      const sumedArr = priceArr.reduce(reducer);
      return setTotalAmount(sumedArr.toFixed(2));
    });
  }, [shopItems]);

  const removeItemFromCart = (item: any) => {
    const newCartItem = shopItems.filter((clickedItem) => clickedItem !== item);
    dispatch(addToCart(newCartItem));
    localStorage.setItem('Item', JSON.stringify(newCartItem));
  };

  return (
    <div className={classes.checkout}>
      <div className={classes.cart}>
        {shopItems.map((item: any) => {
          return (
            <div className={classes.item} key={Math.random()}>
              <div className={classes['item_header']}>
                <p className={classes['item_header--title']}>
                  {item.title.substring(0, 50)}
                </p>
                <div
                  className={classes['item_header--delete']}
                  onClick={() => removeItemFromCart(item)}
                >
                  <CloseIcon />
                </div>
              </div>
              <div className={classes['item_detail']}>
                <img
                  className={classes['item_detail--img']}
                  src={item.image}
                  alt='img'
                />
                <div className={classes['item_detail--price']}>
                  <p>
                    {item.amount} x $
                    {(
                      (item.price.amount / item.price.divisor / 10) *
                      9
                    ).toFixed(2)}{' '}
                  </p>
                  <p className={classes['item_detail--total-price']}>
                    total price:
                  </p>
                  <p className={classes['item_detail--total-amount']}>
                    $
                    {(
                      (item.price.amount / item.price.divisor / 10) *
                      9 *
                      item.amount
                    ).toFixed(2)}{' '}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.continue}>
        <p className={classes['continue-basket']}>Your basket</p>
        <div className={classes['continue_price']}>
          <p>Total price of purchase</p>
          <p className={classes['continue_price--summed']}>
            {'$'}
            {totalAmount}
          </p>
        </div>
        <Button>Continue</Button>
      </div>
    </div>
  );
};

export default Checkout;
