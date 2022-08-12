import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { BodyPartsProvider } from './context/BodyParts';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <BodyPartsProvider>
      <App />
    </BodyPartsProvider>
  </HashRouter>
);
