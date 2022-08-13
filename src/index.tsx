import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Pages
import { Login } from './pages/Login';
import { Overview } from './pages/Overview';
import { Resource } from './pages/Resource';
import { ResourceDetail } from './pages/ResourceDetail';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/overview" element={<Overview/>}/>
        <Route path="/resource/:id" element={<Resource/>}/>
        <Route path="/resource/:id/:idItem" element={<ResourceDetail/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);