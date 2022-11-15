import { Route, Routes } from 'react-router-dom';

import HomePage from './components/Home/HomePage';
import LoginPage from './components/Login/LoginPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
};

export default App;
