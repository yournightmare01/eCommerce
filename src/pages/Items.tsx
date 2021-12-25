/* eslint-disable array-callback-return */
import { useParams } from 'react-router';
import { MinusIcon, PlusIcon, CartIcon } from '../components/icons';
import Slider from '../components/slider/slider';
import { collectionItems } from '../components/collections/CollectionItems';
import classes from './styles.module.scss';
import { Fragment, useEffect, useState } from 'react';

interface CollectionItemsProps {
  items: collectionItems[];
}

const Items: React.FC<CollectionItemsProps> = ({ items }) => {
  const params = useParams() as { itemId: string };
  const link = params.itemId;
  const page = items.find((item) => item.link === link);
  console.log(page);
  const [apiIds, setApiIds] = useState<number[]>([]);
  const [apiData, setApiData] = useState([]);
  const [apiLink, setApiLink] = useState(
    'https://openapi.etsy.com/v3/application/shops/6504049/shop-sections/listings?shop_section_ids=16265179&limit=15'
  );
  let discount = 10;

  useEffect(() => {
    // GET PRODUCT IDS
    const fetchData = async () => {
      const response = await fetch(apiLink, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'l3l05s3fsldandekrnr6lmxj',
        },
      });

      let data = await response.json();

      let arr: number[] = [];
      data.results.forEach((element: any) => {
        arr.push(element.listing_id);
      });
      setApiIds(arr);
    };

    fetchData();
  }, [apiLink]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        // 'https://openapi.etsy.com/v3/application/shops?shop_name=BlvdCustom',
        // get shop id...

        //https://developers.etsy.com/documentation/reference/#operation/getListingsByListingIds
        //DOKUMENTACIJA

        `https://openapi.etsy.com/v3/application/listings/batch?listing_ids=${[
          apiIds,
        ]}&includes=Images&`,

        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'l3l05s3fsldandekrnr6lmxj',
          },
        }
      );

      let data = await response.json();

      setApiData(data.results);
    };

    fetchData();
  }, [apiIds, apiLink]);

  console.log(apiData);

  return (
    <Fragment>
      {apiData.map((item: any) => {
        if (item.listing_id === +params.itemId) {
          return (
            <div className={classes.container}>
              <div className={classes.left}>
                <Slider />
              </div>
              <div className={classes.right}>
                <div className={classes['product-detail']}>
                  <span>Nike</span>
                  <h2>{item.title}</h2>
                  <p className={classes.description}>
                    {item.description.substring(0, 500)}...
                  </p>

                  <div className={classes.cost}>
                    <p className={classes.price}>
                      {(
                        (item.price.amount / item.price.divisor / 10) *
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
                      <MinusIcon />
                      <input type='text' />
                      <PlusIcon />
                    </div>

                    <button className={classes['add-to-cart']}>
                      <CartIcon /> Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </Fragment>
  );
  // return (
  //   <Fragment>
  //     {page && (
  // <div className={classes.container}>
  //   <div className={classes.left}>
  //     <Slider />
  //   </div>
  //   <div className={classes.right}>
  //     <div className={classes['product-detail']}>
  //       <span>{page.company}</span>
  //       <h2>{page.title}</h2>
  //       <p className={classes.description}>{page.description}</p>

  //       <div className={classes.cost}>
  //         <p className={classes.price}>{page.price}</p>
  //         {page.discount && (
  //           <p className={classes.discount}>{page.discount}</p>
  //         )}
  //       </div>
  //       <p className={classes.oldPrice}>{page.oldPrice}</p>
  //       <div className={classes.cart}>
  //         <div className={classes.amount}>
  //           <MinusIcon />
  //           <input type='text' />
  //           <PlusIcon />
  //         </div>

  //         <button className={classes['add-to-cart']}>
  //           <CartIcon /> Add to cart
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //     )}
  //   </Fragment>
  // );
};

export default Items;
