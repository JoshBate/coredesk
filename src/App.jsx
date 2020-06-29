import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Accounts from './accounts';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Route path="/accounts" component={Accounts} />
  </BrowserRouter>
);

export default App;
