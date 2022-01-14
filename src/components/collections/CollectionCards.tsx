import { useEffect, useState } from 'react';
import classes from './CollectionCards.module.scss';
import { Link } from 'react-router-dom';
import { getProductData } from '../../features/getProductsData/produtDataSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getApiLink } from '../../helper/getApiLink';
import { useInView } from 'react-intersection-observer';
import LoadingSpinner from '../UI/LoadingSpinner';

const CollectionCards: React.FC = () => {
  const [sort, setSort] = useState<'asc' | 'desc' | '' | 'created'>('');
  const [apiLink, setApiLink] = useState(getApiLink());
  const [limit, setLimit] = useState(20);
  const [filter, setFilter] = useState(false);

  const showFilter = () => setFilter(!filter);

  // useEffect(() => {
  //   const functioncall = async () => {
  //     const res = await fetch(
  //       'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?lang=en&productcode=0839915011&country=asia2',
  //       {
  //         method: 'GET',
  //         headers: {
  //           'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
  //           'x-rapidapi-key':
  //             '8be9a1403dmshe62b28325765610p151225jsn1dce1de72678',
  //         },
  //       }
  //     );

  //     const data = await res.json();

  //     console.log(data.product);
  //   };

  //   functioncall();
  // }, []);

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

  const filterBy = (filterBy: any) => {
    setSort(filterBy);
    showFilter();
  };

  return (
    <div className={classes.relative}>
      <div className={classes['filter-container']}>
        <button className={classes['filter-btn']} onClick={showFilter}>
          Filter {filter ? '↑' : '↓'}
        </button>
        {filter && (
          <div className={classes.dropdown}>
            <span onClick={() => filterBy('asc')}>price ascending</span>
            <span onClick={() => filterBy('desc')}>price descending</span>
            <span onClick={() => filterBy('created')}>newest</span>
          </div>
        )}
      </div>

      <div className={classes.layout}>
        {productData.map((item: any, i: number) => {
          return (
            <Link to={`collections/${item.listing_id}`} key={item.listing_id}>
              <div className={classes.cards}>
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
