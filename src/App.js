import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { useTranslation } from 'react-i18next';

function App() {

  const { t } = useTranslation();

  return (
    <Router>
      <Routes>
        {/* <Route path="/admin/" children={<Admin />} />
        <Route path="/:path" children={<Site />} />
        <Route path="/" children={<Site />} /> */}
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
