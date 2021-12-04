import { useParams } from 'react-router';
import { MinusIcon, PlusIcon, CartIcon } from '../components/icons';
import Slider from '../components/slider/slider';
import { collectionItems } from '../components/collections/CollectionItems';
import classes from './styles.module.scss';
import { Fragment } from 'react';

interface CollectionItemsProps {
  items: collectionItems[];
}

const Items: React.FC<CollectionItemsProps> = ({ items }) => {
  const params = useParams() as { itemId: string };
  const link = params.itemId;
  const page = items.find((item) => item.link === link);
  console.log(page);

  return (
    <Fragment>
      {page && (
        <div className={classes.container}>
          <div className={classes.left}>
            <Slider />
          </div>
          <div className={classes.right}>
            <div className={classes['product-detail']}>
              <span>{page.company}</span>
              <h2>{page.title}</h2>
              <p className={classes.description}>{page.description}</p>

              <div className={classes.cost}>
                <p className={classes.price}>{page.price}</p>
                <p className={classes.discount}>{page.discount}</p>
              </div>
              <p className={classes.oldPrice}>{page.oldPrice}</p>
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
      )}
    </Fragment>
  );
};

export default Items;
