/* eslint-disable array-callback-return */
import { useParams } from 'react-router';
import { MinusIcon, PlusIcon, CartIcon } from '../components/icons';
import Slider from '../components/slider/slider';
import classes from './styles.module.scss';
import { Fragment, useEffect, useState } from 'react';
import { getProductData } from '../features/getProductsData/produtDataSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Button from '../components/UI/Button';
// import { getCartItems } from '../features/getCartItems/getCartItems';

const Items: React.FC = () => {
  const dispatch = useAppDispatch();
  // const { cartItems } = useAppSelector((state) => state.cartItems);
  const { productData } = useAppSelector((state) => state.productData);
  const [amount, setAmount] = useState(0);
  const [cardData, setCardData] = useState<any[]>([]);

  const [storageData, setStorageData] = useState<any>();

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  const params = useParams() as { itemId: string };
  let discount = 10;

  // const sendData = async (id: number, amount: number) => {
  //   await fetch(
  //     'https://ecommerce-177d7-default-rtdb.europe-west1.firebasedatabase.app/sneakers.json',
  //     {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         id,
  //         amount,
  //       }),
  //       headers: {
  //         'Content-type': 'application/json',
  //       },
  //     }
  //   );
  // };

  //Korisitimo nesto kao filter da nadjemo iteme koji imaju isti id, i sabiramo njihov amount

  useEffect(() => {
    const storageItem = localStorage.getItem('Item');

    if (!storageItem) return;
    const parsedItem = JSON.parse(storageItem);

    setCardData(parsedItem);
  }, []);

  useEffect(() => {
    localStorage.setItem('Item', JSON.stringify(cardData));
    const itemData = localStorage.getItem('Item');

    const obj = JSON.parse(itemData!);

    setStorageData(itemData);
    obj.map((item: any) => {});
  }, [cardData]);

  return (
    <Fragment>
      {productData.map((item: any) => {
        if (item.listing_id === +params.itemId) {
          return (
            <div className={classes.container} key={item.listing_id}>
              <div className={classes.left}>
                <Slider />
              </div>
              <div className={classes.right}>
                <div className={classes['product-detail']}>
                  <h2>{item.title.substring(0, 50)}</h2>
                  <p className={classes.description}>
                    {item.description.substring(0, 500)}...
                  </p>

                  <div className={classes.cost}>
                    <p className={classes.price}>
                      {(
                        (item.price.amount / item.price.divisor / discount) *
                        9
                      ).toFixed(2)}{' '}
                    </p>
                    <p className={classes.discount}>{discount}%</p>
                  </div>
                  <p className={classes.oldPrice}>
                    {(item.price.amount / item.price.divisor).toFixed(2)}{' '}
                  </p>
                  <div className={classes.cart}>
                    <div className={classes.amount}>
                      <button
                        className={classes['amount-btn']}
                        onClick={() => {
                          amount === 0 ? setAmount(0) : setAmount(amount - 1);
                        }}
                      >
                        <MinusIcon />
                      </button>
                      <span>{amount}</span>
                      <button
                        className={classes['amount-btn']}
                        onClick={() => setAmount(amount + 1)}
                      >
                        <PlusIcon />
                      </button>
                    </div>
                    <Button
                      onClick={() => {
                        cardData.filter(
                          (item) =>
                            item.id === +params.itemId &&
                            setCardData((oldArray) => [
                              ...oldArray,
                              { id: item.id, amount: amount + item.amount },
                            ])
                        );
                        setCardData((oldArray) => [
                          ...oldArray,
                          { id: item.listing_id, amount },
                        ]);

                        // sendData(item.listing_id, amount);
                        // dispatch(getCartItems());
                      }}
                      className={classes['add-to-cart']}
                    >
                      <CartIcon /> Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </Fragment>
  );
};

export default Items;
