import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { BodyPartsProvider } from './context/BodyParts';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <BodyPartsProvider>
      <App />
    </BodyPartsProvider>
  </BrowserRouter>
);
