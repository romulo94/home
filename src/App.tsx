import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';
import 'assets/fonts/fira-code.css';
import 'styles/tailwind.css';
import 'styles/global.css';
import 'i18n';
import { useEffect } from 'react';
import { Style } from 'services';

function App() {
  useEffect(() => {
    Style.recognizeDark();
  }, []);
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
