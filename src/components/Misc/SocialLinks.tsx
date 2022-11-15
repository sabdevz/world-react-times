import GoogleLogo from '../../assets/google.svg';
import FacebookLogo from '../../assets/facebook.svg';
import LinkedinLogo from '../../assets/linkedin.svg';
import TwitterLogo from '../../assets/twitter.svg';

const SocialLinks = () => {
  return (
    <div className='social-icons'>
      <img src={GoogleLogo} alt='_' />
      <img src={FacebookLogo} alt='_' />
      <img src={LinkedinLogo} alt='_' />
      <img src={TwitterLogo} alt='_' />
    </div>
  );
};

export default SocialLinks;
