import { useEffect, useState } from 'react';
import classes from './CollectionCards.module.scss';
import { Fragment } from 'react';
import FilterModal from '../filters/Filters';
import { ArrowDownIcon } from '../icons';

const gender = [{ option: 'Man' }, { option: 'Women' }];
const collection = [
  { option: 'Spring' },
  { option: 'Summer' },
  { option: 'Fall' },
  { option: 'Winter' },
];
const discountSort = [{ option: 'Ascending' }, { option: 'Descending' }];
const type = [{ option: 'Sneakers' }, { option: 'Shoes' }, { option: 'Boots' }];

const CollectionCards = () => {
  const [isGenderClicked, setIsGenderClicked] = useState(false);
  const [isCollectionClicked, setIsCollectionClicked] = useState(false);
  const [isDiscountClicked, setIsDiscountClicked] = useState(false);
  const [isTypeClicked, setIsTypeClicked] = useState(false);
  const [isSortClicked, setIsSortClicked] = useState(false);
  const [apiIds, setApiIds] = useState<number[]>([]);
  const [apiData, setApiData] = useState([]);
  let discount = 10;

  useEffect(() => {
    // GET PRODUCT IDS
    const fetchData = async () => {
      const response = await fetch(
        'https://openapi.etsy.com/v3/application/shops/6504049/shop-sections/listings?shop_section_ids=16265179',
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'l3l05s3fsldandekrnr6lmxj',
          },
        }
      );

      let data = await response.json();

      let arr: number[] = [];
      data.results.forEach((element: any) => {
        arr.push(element.listing_id);
      });
      setApiIds(arr);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        // 'https://openapi.etsy.com/v3/application/shops?shop_name=BlvdCustom',
        // get shop id...

        `https://openapi.etsy.com/v3/application/listings/batch?listing_ids=${[
          apiIds,
        ]}&includes=Images`,

        //https://developers.etsy.com/documentation/reference#operation/getListingImages
        //DOKUMENTACIJA

        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'l3l05s3fsldandekrnr6lmxj',
          },
        }
      );

      let data = await response.json();

      setApiData(data.results);
      console.log(data.results);
    };

    fetchData();
  }, [apiIds]);

  console.log(apiData);
  return (
    <Fragment>
      <div className={classes.filterNav}>
        <div className={classes.filterContainer}>
          <div className={classes.filterDiv}>
            <div
              onClick={() => setIsGenderClicked(!isGenderClicked)}
              className={classes['filter-button']}
            >
              <h4> Filter by gender</h4>
              <ArrowDownIcon />
            </div>
            {isGenderClicked && (
              <div className={`${classes.categoryContainer} `}>
                <FilterModal filterArray={gender} />
              </div>
            )}
          </div>

          <div className={classes.filterDiv}>
            <div
              onClick={() => setIsCollectionClicked(!isCollectionClicked)}
              className={classes['filter-button']}
            >
              <h4>Filter by collection</h4>
              <ArrowDownIcon />
            </div>
            {isCollectionClicked && (
              <div className={`${classes.categoryContainer}`}>
                <FilterModal filterArray={collection} />
              </div>
            )}
          </div>
          <div className={classes.filterDiv}>
            <div
              onClick={() => setIsDiscountClicked(!isDiscountClicked)}
              className={classes['filter-button']}
            >
              <h4>Filter by discount</h4>
              <ArrowDownIcon />
            </div>
            {isDiscountClicked && (
              <div className={`${classes.categoryContainer}`}>
                <FilterModal filterArray={discountSort} />
              </div>
            )}
          </div>
          <div className={classes.filterDiv}>
            <div
              onClick={() => setIsTypeClicked(!isTypeClicked)}
              className={classes['filter-button']}
            >
              <h4>Filter by type</h4>
              <ArrowDownIcon />
            </div>
            {isTypeClicked && (
              <div className={`${classes.categoryContainer}`}>
                <FilterModal filterArray={type} />
              </div>
            )}
          </div>
        </div>
        <div className={classes.sortContainer}>
          <span
            onClick={() => {
              setIsSortClicked(!isSortClicked);
            }}
          >
            Price
            {isSortClicked ? ' Ascending' : ' Descending'}
          </span>
        </div>
      </div>

      <div className={classes.layout}>
        {apiData.map((item: any, i) => {
          return (
            <div key={Math.random()} className={classes.cards}>
              <p>{item.title.substring(0, 25)}...</p>
              <img src={item.images[0].url_170x135} alt='404' />

              <div className={classes.cost}>
                <p className={classes.price}>
                  {((item.price.amount / item.price.divisor / 10) * 9).toFixed(
                    2
                  )}{' '}
                  {item.price.currency_code}
                </p>
                <p className={classes.discount}>{discount}%</p>
              </div>

              <p className={classes.oldPrice}>
                {(item.price.amount / item.price.divisor).toFixed(2)}{' '}
              </p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default CollectionCards;
