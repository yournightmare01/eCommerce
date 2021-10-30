import { CollectionData } from './CollectionItems';
import classes from './CollectionCards.module.scss';
import sneakers from '../../images/image-product-1-thumbnail.jpg';

const CollectionCards = () => {
  return (
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
  );
};

export default CollectionCards;
