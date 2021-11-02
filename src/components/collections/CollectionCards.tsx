import { CollectionData } from './CollectionItems';
import classes from './CollectionCards.module.scss';
import sneakers from '../../images/image-product-1.jpg';
import { Fragment } from 'react';
import FilterModal from '../filters/Filters';

const options = [{ option: 'Man' }, { option: 'Women' }];

const CollectionCards = () => {
  return (
    <Fragment>
      <div className={classes.filterNav}>
        <div className={classes.filterContainer}>
          <div className={classes['filters-div']}>
            <h4> Filter1</h4>
            <FilterModal filterArray={options} />
          </div>
          <div className={classes['filters-div']}>
            <h4>Filter2</h4>
          </div>
          <div className={classes['filters-div']}>
            <h4>Filter3</h4>
          </div>
          <div className={classes['filters-div']}>
            <h4>Filter3</h4>
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
