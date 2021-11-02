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

const CollectionCards = () => {
  return (
    <Fragment>
      <div className={classes.filterNav}>
        <div className={classes.filterContainer}>
          <div className={classes['filters-div']}>
            <h4> Filter by gender</h4>
            <ArrowDownIcon />
            <div className={`${classes.genderContainer} ${classes.first}`}>
              <FilterModal filterArray={options1} />
            </div>
          </div>
          <div className={classes['filters-div']}>
            <h4>Filter by collection</h4>
            <ArrowDownIcon />
            <div className={`${classes.genderContainer} ${classes.second}`}>
              <FilterModal filterArray={options2} />
            </div>
          </div>
          <div className={classes['filters-div']}>
            <h4>Filter by discount</h4>
            <ArrowDownIcon />
            <div
              className={`${classes.genderContainer} ${classes.third}`}
            ></div>
          </div>
          <div className={classes['filters-div']}>
            <h4>Filter by type</h4>
            <ArrowDownIcon />
            <div
              className={`${classes.genderContainer} ${classes.forth}`}
            ></div>
          </div>
        </div>

        <div className={classes.sortContainer}>
          <div className={classes.sort}>
            <h4>SORT</h4>
          </div>
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
