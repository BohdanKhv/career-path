import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavContainer } from './components';
import {
  Home
} from './pages';


const App = () => {
  const theme = useSelector((state) => state.local.theme);

  useEffect(() => {
      if (theme === 'dark') {
          document.body.setAttribute('data-theme', 'dark');
      } else {
          document.body.setAttribute('data-theme', 'light');
      }
  }, [theme]);

    return (
      <>
        <Router>
          <NavContainer>
            <Routes>
              <Route path='/' element={<Home/>} />
            </Routes>
          </NavContainer>
        </Router>
      </>
    );

}

export default App;