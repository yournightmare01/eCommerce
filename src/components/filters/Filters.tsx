import classes from '../collections/CollectionCards.module.scss';

const FilterModal = (props: any, id: any) => {
  return props.filterArray.map((item: any) => {
    return (
      <div className={classes.genderSelect}>
        <input type='checkbox' value={item.option} name={item.option} />
        <label htmlFor={item.option}>{item.option}</label>
      </div>
    );
  });
};

export default FilterModal;
