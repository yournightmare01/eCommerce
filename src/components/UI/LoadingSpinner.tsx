import classes from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={classes['lds-ellipsis']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
