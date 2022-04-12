import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Technology from './components/Technology/Technology';

function App() {

  const { t } = useTranslation();

  return (
    <Router>
      <Header />
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
      <Footer />
    </Router>
    
  );
}

export default App;
