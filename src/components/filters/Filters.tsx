import classes from '../collections/CollectionCards.module.scss';

const FilterModal = (props: any) => {
  console.log(props.filterArray);
  return (
    <div className={classes.genderContainer}>
      {props.filterArray.map((item: any) => {
        return (
          <div className={classes.genderSelect}>
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

/* <div className={classes.genderContainer}>
              {options.map((item, i) => {
                return (
                  <div className={classes.genderSelect}>
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
} */
