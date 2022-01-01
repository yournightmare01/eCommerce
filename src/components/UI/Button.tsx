import classes from './Button.module.scss';

const Button = (props: any) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      {props.children}
    </button>
  );
};

export default Button;
