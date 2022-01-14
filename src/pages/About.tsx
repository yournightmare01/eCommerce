import classes from './About.module.scss';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes['about__container']}>
        <div className={classes['about__container--main']}>
          <div>
            <img src={image1} alt='arg'></img>
          </div>
          <span></span>
          <span>
            <h1>
              The "Sneakers" brand was created in 2021, in the atmospheric Nis,
              a district of Serbia. Since then, we become a cult meetings place
              of people who share love for good design, sneakers and street
              culture. Here, every day you can meet tourists from various
              corners of the world, locals, young individualists from all over
              the World, as well as celebrities, musicians and artists looking
              for inspiration, following the latest trends.
            </h1>
          </span>
        </div>

        <div className={classes['about__container--main']}>
          <span>
            <h1>
              The "Sneakers" brand has evolved, and in January 2022 has showed
              its new “face”, presenting rebranding, as well as new interiors
              during the dedicated #changetheimage event. Our new core
              interaction has a lot of components; cooperation with the young
              generation and local artists, making projects that support talents
              are to form the basis for the development of the SneakerStudio
              brand..
            </h1>
          </span>
          <div>
            <img src={image4} alt='arg'></img>
          </div>
        </div>

        <div className={classes['about__container--main']}>
          <div>
            <img src={image2} alt='arg'></img>
          </div>
          <span>
            <h1>
              Our shop is full of life and positive energy of your space by
              providing creative and unique ideas. Complemented by people who
              treat their work as a passion.
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
