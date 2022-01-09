import classes from './Form.module.scss';

const Form = (props: any) => {
  return <div className={classes.form}>{props.children}</div>;
};

export default Form;
