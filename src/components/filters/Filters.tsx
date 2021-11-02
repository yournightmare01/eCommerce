import classes from '../collections/CollectionCards.module.scss';

//
const FilterModal = (props: any) => {
  console.log(props.filterArray);
  return (
    <div className={classes.genderContainer}>
      {props.filterArray.map((item: any, i: number) => {
        return (
          <div className={classes[`genderSelect${i}`]}>
            <input
              type='checkbox'
              value={item.option}
              name={item.option}
              id={item.option}
            />
            <label htmlFor={item.option}>{item.option}</label>
          </div>
        );
      })}
    </div>
  );
};

export default FilterModal;
