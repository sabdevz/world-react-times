import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../Misc/SocialLinks';

import Cards from './Cards';

const HomePage = () => {
  const [countryData, setCounryData] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    getCountriesData();
  }, [countryData]);

  const getCountriesData = async () => {
    const options = { method: 'GET' };
    await fetch(
      'https://restcountries.com/v2/all?fields=name%2Cregion%2Cflag',
      options
    )
      .then((response) => response.json())
      .then((response) => setCounryData(response.slice(0, 20)))
      .catch((err) => console.error(err));
  };

  return (
    <main>
      <div className='sub-div'>
        <nav className='navbar'>
          <h3 className='logo'>Countries</h3>
          <ul
            className={isSmallScreen ? 'nav-links-mobile' : 'nav-links'}
            onClick={() => setIsSmallScreen(false)}
          >
            <li className='link-items active'>
              <Link to='#'>All</Link>
            </li>
            <li className='link-items'>
              <Link to='#'>Asia</Link>
            </li>
            <li className='link-items'>
              <Link to='#'>Europe</Link>
            </li>

            <li className='link-items'>
              <Link to='/'>Login</Link>
            </li>
          </ul>

          <div
            className='mobile-menu-icon'
            onClick={() => setIsSmallScreen(!isSmallScreen)}
          >
            {isSmallScreen ? (
              <i className='fas fa-times' />
            ) : (
              <i className='fas fa-bars' />
            )}
          </div>
        </nav>
      </div>

      <Cards countries={countryData} />
      <SocialLinks />
      <div className='home-mail'>Example@gmail.com</div>
      <div className='copyright'>
        Copyright &copy; 2022 Name All Rights Reserved
      </div>
    </main>
  );
};

export default HomePage;
