import classes from './CollectionCards.module.scss';

export const options = [
  {
    option: 'Man',
  },
  { option: 'Women' },
];

const FilterModal = () => {
  return (
    <div className={classes.genderContainer}>
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
  );
};

export default FilterModal;

{
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
}
