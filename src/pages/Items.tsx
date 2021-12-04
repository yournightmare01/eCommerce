import { MinusIcon, PlusIcon, CartIcon } from '../components/icons';
import Slider from '../components/slider/slider';

import classes from './styles.module.scss';

const Items = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Slider />
      </div>
      <div className={classes.right}>
        <div className={classes['product-detail']}>
          <span>sneaker company</span>
          <h2>Fall Limited Edition Sneakers</h2>
          <p className={classes.description}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>

          <div className={classes.cost}>
            <p className={classes.price}>$125.00</p>
            <p className={classes.discount}>50%</p>
          </div>
          <p className={classes.oldPrice}>$250.00</p>
          <div className={classes.cart}>
            <div className={classes.amount}>
              <MinusIcon />
              <input type='text' value='0' />
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
};

export default Items;
