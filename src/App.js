import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { useTranslation } from 'react-i18next';
import Landing from './components/Landing/Landing';
import Technology from './components/Technology/Technology';

function App() {

  const { t } = useTranslation();

  return (
    <Router>
      {/* // nav insdie header compoennt will need something like This
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
      <Routes>
         <Route path="/ai" element={<Technology technology={"ai"} />} />
         <Route path="/quantum" element={<Technology technology={"quantum"} />} />
         <Route path="/semiconductors" element={<Technology technology={"semiconductors"} />} />
         <Route path="/hybrid-cloud" element={<Technology technology={"hybrid-cloud"} />} />
         <Route path="/security" element={<Technology technology={"security"} />} />
         <Route path="/systems" element={<Technology technology={"systems"} />} />

         <Route path="/:" element={<Landing />} />
         <Route path="/" element={<Landing />} />
      </Routes>
      <div className="App">
      <header className="App-header">
        <p>
        {t('header.title')}
        </p>
      </header>
    </div>
    </Router>
    
  );
}

export default App;
