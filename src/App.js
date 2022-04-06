import logo from './logo.svg';
import './App.css';

import { useTranslation } from 'react-i18next';

function App() {

  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <p>
        {t('header.title')}
        </p>
      </header>
    </div>
  );
}

export default App;
