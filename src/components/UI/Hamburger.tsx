import './Hamburger.scss';

const Hamburger = () => {
  return (
    <nav role='navigation'>
      <div id='menuToggle'>
        <input type='checkbox' />

        <span></span>
        <span></span>
        <span></span>

        <ul id='menu'>
          <div>
            <li>Home</li>
          </div>
          <div>
            <li>About</li>
          </div>
          <div>
            <li>Info</li>
          </div>
          <div>
            <li>Contact</li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Hamburger;
