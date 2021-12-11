import { useEffect, useState } from 'react';
import { CollectionData } from './CollectionItems';
import classes from './CollectionCards.module.scss';
import sneakers from '../../images/image-product-1.jpg';
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://openapi.etsy.com/v2/listings/active?api_key=l3l05s3fsldandekrnr6lmxj'
      );

      let data = await response.json();

      console.log(data);
    };

    fetchData();
  }, []);

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
        {CollectionData.map((item, i) => {
          return (
            <div key={Math.random()} className={classes.cards}>
              <p>{item.title}</p>
              <img src={item.image} alt='' />
              <div className={classes.cost}>
                <p className={classes.price}>{item.price}</p>
                {item.discount && (
                  <p className={classes.discount}>{item.discount}</p>
                )}
              </div>
              <p className={classes.oldPrice}>{item.oldPrice}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default CollectionCards;
