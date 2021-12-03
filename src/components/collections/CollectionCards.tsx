import { useState } from 'react';
import { CollectionData } from './CollectionItems';
import classes from './CollectionCards.module.scss';
import sneakers from '../../images/image-product-1.jpg';
import { Fragment } from 'react';
import FilterModal from '../filters/Filters';
import { ArrowDownIcon } from '../icons';

const options1 = [{ option: 'Man' }, { option: 'Women' }];
const options2 = [
  { option: 'Spring' },
  { option: 'Summer' },
  { option: 'Fall' },
  { option: 'Winter' },
];
const options3 = [{ option: 'Ascending' }, { option: 'Descending' }];
const options4 = [
  { option: 'Sneakers' },
  { option: 'Shoes' },
  { option: 'Boots' },
];

const CollectionCards = () => {
  const [isGenderClicked, setIsGenderClicked] = useState(false);
  const [isCollectionClicked, setIsCollectionClicked] = useState(false);
  const [isDiscountClicked, setIsDiscountClicked] = useState(false);
  const [isTypeClicked, setIsTypeClicked] = useState(false);

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
                <FilterModal filterArray={options1} />
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
                <FilterModal filterArray={options2} />
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
                <FilterModal filterArray={options3} />
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
                <FilterModal filterArray={options4} />
              </div>
            )}
          </div>
        </div>
        <div className={classes.sortContainer}>
          <span>Price Ascending</span>
        </div>
      </div>
      <div className={classes.layout}>
        {CollectionData.map((item, i) => {
          return (
            <div className={classes.cards}>
              <p>{item.title}</p>
              <img src={sneakers} alt='' />
              <div className={classes.cost}>
                <p className={classes.price}>{item.price}</p>
                <p className={classes.discount}>{item.discount}</p>
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
