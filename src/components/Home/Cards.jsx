const Cards = ({ countries }) => {
  console.log(countries);
  return (
    <>
      <section className='card-container'>
        <div className='grid-container'>
          {countries.map((country) => (
            <div className='grid-item'>
              <div className='card-data'>
                <div className='card-image'>
                  <img src={country.flag} alt='' />
                </div>
                <div className='card-details'>
                  <div className='country-name'>{country.name}</div>
                  <p className='continent-name'>{country.region}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Cards;
