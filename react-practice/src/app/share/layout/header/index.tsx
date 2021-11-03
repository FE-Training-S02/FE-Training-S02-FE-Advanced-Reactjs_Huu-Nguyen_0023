const Header = () => {
  return (
    <header>
      <section className='section-header'>
        <div className='container'>
          <ul className='header-group-item'>
            <li className='list-item logo'>
              <span className='logo-block'>A</span>
              <span className='logo-block'>B</span>
              <span className='logo-block'>C</span>
            </li>
            <li className='list-item sign-in'>Sign in</li>
            <li className='list-item'>Home</li>
            <li className='list-item'>News</li>
            <li className='list-item'>Sport</li>
            <li className='list-item'>Reel</li>
            <li className='list-item'>Worklife</li>
            <li className='list-item'>Travel</li>
            <li className='list-item'>Future</li>
            <li className='list-item'>Culture</li>
            <li className='list-item'>More</li>
            <li className='list-item'>
              <input className='input' type='text' placeholder='Search' />
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Header;
