import { useEffect, useState } from 'react';
import classes from './CollectionCards.module.scss';
import { Link } from 'react-router-dom';
import { getProductData } from '../../features/getProductsData/produtDataSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getApiLink } from '../../helper/getApiLink';
import { useInView } from 'react-intersection-observer';
import LoadingSpinner from '../UI/LoadingSpinner';

const CollectionCards: React.FC = () => {
  const [isSortClicked, setIsSortClicked] = useState(false);
  const [sort, setSort] = useState<'asc' | 'desc' | ''>('');
  const [apiLink, setApiLink] = useState(getApiLink());
  const [limit, setLimit] = useState(20);

  let discount = 10;

  const [ref, inView] = useInView();

  const dispatch = useAppDispatch();
  const { productData } = useAppSelector((state) => state.productData);

  const loadingStatus = useAppSelector((state) => state.productData);

  useEffect(() => {
    dispatch(getProductData(apiLink));
  }, [dispatch, apiLink]);

  useEffect(() => {
    sort && setApiLink(getApiLink(sort));
  }, [sort]);

  useEffect(() => {
    if (inView) {
      if (limit > 100) {
        setLimit(100);
        return;
      }
      setApiLink(getApiLink(sort ? sort : undefined, limit));
      setLimit(limit + 15);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className={classes.relative}>
      <div className={classes.sortContainer}>
        <span
          onClick={() => {
            setIsSortClicked(!isSortClicked);
            isSortClicked ? setSort('desc') : setSort('asc');
          }}
        >
          Price
          {isSortClicked ? ' Ascending' : ' Descending'}
        </span>
      </div>

      <div className={classes.layout}>
        {productData.map((item: any, i: number) => {
          return (
            <Link to={`collections/${item.listing_id}`} key={i}>
              <div key={Math.random()} className={classes.cards}>
                <p>{item.title.substring(0, 25)}...</p>
                <img src={item.images[0].url_170x135} alt='404' />

                <div className={classes.cost}>
                  <p className={classes.price}>
                    {(
                      (item.price.amount / item.price.divisor / 10) *
                      9
                    ).toFixed(2)}{' '}
                    {item.price.currency_code}
                  </p>
                  <p className={classes.discount}>{discount}%</p>
                </div>

                <p className={classes.oldPrice}>
                  {(item.price.amount / item.price.divisor).toFixed(2)}{' '}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <div ref={ref} className={classes.interesction}></div>
      {limit < 101 && loadingStatus.status === 'loading' && <LoadingSpinner />}
    </div>
  );
};

export default CollectionCards;
