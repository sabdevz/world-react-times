import { useState } from 'react';

import { Link } from 'react-router-dom';

import GoogleLogo from '../../assets/google.svg';
import FacebookLogo from '../../assets/facebook.svg';
import LinkedinLogo from '../../assets/linkedin.svg';
import TwitterLogo from '../../assets/twitter.svg';

const Form: React.FC = () => {
  const [userName, setUserNames] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <div className='form-container'>
      <p className='form-title'>Sign In</p>
      <div className='l-user'>
        <p className='new-user'>New user?</p>
        <p className='create-user'>Create an account</p>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <input
            type='text'
            placeholder='Username or email'
            value={userName}
            onChange={(event) => setUserNames(event.target.value)}
          />
        </div>

        <div>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className='checkbox'>
          <input
            type='checkbox'
            checked={isChecked}
            name='remember'
            onChange={() => setIsChecked(!isChecked)}
          />
          <label>Keep me signed in</label>
        </div>
        <div className='btn-div'>
          <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>
            <button type='submit'>Sign In</button>
          </Link>
        </div>
      </form>

      <div className='dash'>
        <p>____</p>
        <p>Or Sign In With </p>
        <p>____</p>
      </div>

      <div className='alt-signin'>
        <img src={GoogleLogo} alt='' />
        <img src={FacebookLogo} alt='' />
        <img src={LinkedinLogo} alt='' />
        <img src={TwitterLogo} alt='' />
      </div>
    </div>
  );
};

export default Form;
