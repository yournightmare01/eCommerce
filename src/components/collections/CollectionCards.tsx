import { useEffect, useState } from 'react';
import classes from './CollectionCards.module.scss';
import FilterModal from '../filters/Filters';
import { ArrowDownIcon } from '../icons';
import { Link } from 'react-router-dom';
import { getProductData } from '../../features/getProductsData/produtDataSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getApiLink } from '../../helper/getApiLink';
import { useInView } from 'react-intersection-observer';

const gender = [{ option: 'Man' }, { option: 'Women' }];
const collection = [
  { option: 'Spring' },
  { option: 'Summer' },
  { option: 'Fall' },
  { option: 'Winter' },
];
const discountSort = [{ option: 'Ascending' }, { option: 'Descending' }];
const type = [{ option: 'Sneakers' }, { option: 'Shoes' }, { option: 'Boots' }];

const CollectionCards: React.FC = () => {
  const [isSortClicked, setIsSortClicked] = useState(false);
  const [sort, setSort] = useState<'asc' | 'desc' | ''>('');
  const [apiLink, setApiLink] = useState(getApiLink());
  const [limit, setLimit] = useState(20);

  const [isModalHidden, setIsModalHidden] = useState(true);
  const [isModalHidden2, setIsModalHidden2] = useState(true);
  const [isModalHidden3, setIsModalHidden3] = useState(true);
  const [isModalHidden4, setIsModalHidden4] = useState(true);

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

  const showHandler = () => {
    setIsModalHidden(!isModalHidden);
  };

  const showHandler2 = () => {
    setIsModalHidden2(!isModalHidden2);
  };
  const showHandler3 = () => {
    setIsModalHidden3(!isModalHidden3);
  };

  const showHandler4 = () => {
    setIsModalHidden4(!isModalHidden4);
  };

  return (
    <div className={classes.relative}>
      <div className={classes.filterNav}>
        <div className={classes.filterContainer}>
          <div className={classes.filterDiv}>
            <div onClick={showHandler} className={classes['filter-button']}>
              <h4> Filter by gender</h4>
              <ArrowDownIcon />
            </div>
            <div
              className={`${classes.categoryContainer} ${
                isModalHidden && classes.hideModal1
              }`}
            >
              <FilterModal filterArray={gender} />
            </div>
          </div>

          <div className={classes.filterDiv}>
            <div onClick={showHandler2} className={classes['filter-button']}>
              <h4>Filter by collection</h4>
              <ArrowDownIcon />
            </div>

            <div
              className={`${classes.categoryContainer} ${
                isModalHidden2 && classes.hideModal2
              }`}
            >
              <FilterModal filterArray={collection} />
            </div>
          </div>
          <div className={classes.filterDiv}>
            <div onClick={showHandler3} className={classes['filter-button']}>
              <h4>Filter by discount</h4>
              <ArrowDownIcon />
            </div>

            <div
              className={`${classes.categoryContainer} ${
                isModalHidden3 && classes.hideModal3
              }`}
            >
              <FilterModal filterArray={discountSort} />
            </div>
          </div>
          <div className={classes.filterDiv}>
            <div onClick={showHandler4} className={classes['filter-button']}>
              <h4>Filter by type</h4>
              <ArrowDownIcon />
            </div>

            <div
              className={`${classes.categoryContainer} ${
                isModalHidden4 && classes.hideModal4
              }`}
            >
              <FilterModal filterArray={type} />
            </div>
          </div>
        </div>
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
      {limit < 101 && loadingStatus.status === 'loading' && (
        <div className={classes['lds-ellipsis']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default CollectionCards;
