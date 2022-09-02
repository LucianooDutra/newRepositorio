import React from 'react';
import Rotas from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Rotas />
    </BrowserRouter>
  );
}

export default App;
