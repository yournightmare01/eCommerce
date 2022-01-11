import { useParams } from 'react-router';
import { MinusIcon, PlusIcon, CartIcon } from '../components/icons';
import Slider from '../components/slider/slider';
import classes from './styles.module.scss';
import { Fragment, useEffect, useState } from 'react';
import { getProductData } from '../features/getProductsData/produtDataSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Button from '../components/UI/Button';
import { addToCart } from '../features/setShiopItems/setShopItems';

const Items: React.FC = () => {
  const dispatch = useAppDispatch();
  const { productData } = useAppSelector((state) => state.productData);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { shopItems } = useAppSelector((state) => state.shopItems); // NE BRISI PRAVI BUGG U CART

  const [amount, setAmount] = useState(1);
  const [cardData, setCardData] = useState<any[]>([]);

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  const params = useParams() as { itemId: string };
  let discount = 10;

  const storageItem = localStorage.getItem('Item');

  useEffect(() => {
    if (!storageItem) return;
    const parsedItem = JSON.parse(storageItem);

    setCardData(parsedItem);
  }, [storageItem]);

  const createItemInCart = (item: any) => {
    const index = cardData.findIndex((item) => item.id === +params.itemId);
    if (index > -1) {
      setCardData((oldArray) => {
        const newArray = [...oldArray];
        newArray[index] = {
          ...newArray[index],
          amount: amount + oldArray[index].amount,
        };

        localStorage.setItem('Item', JSON.stringify(newArray));
        dispatch(addToCart(newArray));
        return newArray;
      });
    } else {
      setCardData((oldArray) => {
        const newArray = [
          ...oldArray,
          {
            id: item.listing_id,
            title: item.title,
            image: item.images[0].url_75x75,
            price: item.price,
            amount,
          },
        ];

        localStorage.setItem('Item', JSON.stringify(newArray));
        dispatch(addToCart(newArray));
        return newArray;
      });
    }
  };

  return (
    <Fragment>
      {productData.map((item: any): JSX.Element | undefined => {
        return (
          <Fragment key={item.listing_id}>
            {item.listing_id === +params.itemId && (
              <div className={classes.container}>
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
                            amount === 1 ? setAmount(1) : setAmount(amount - 1);
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
                        onClick={() => createItemInCart(item)}
                        className={classes['add-to-cart']}
                      >
                        <CartIcon /> Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Items;
