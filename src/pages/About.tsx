import classes from './About.module.scss';
const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes['about__container']}>
        <div className={classes['about__container--left']}>
          <h1>Left - Inverted</h1>
        </div>
        <div className={classes['about__container--main']}>
          <h1>About - Main Content</h1>
        </div>
        <div className={classes['about__container--right']}>
          <h1>Right - Inverted</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
