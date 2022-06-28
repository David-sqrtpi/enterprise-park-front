import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from './routes/invoices';
import Expenses from './routes/expenses';
import Invoice from './routes/invoice';
import Admin from './routes/admin';
import Buscar from './routes/buscar';
import Analiticas from './routes/analiticas';
import Piso from './routes/piso';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} >
            <Route path=":invoiceId" element={<Invoice />} />
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
          </Route>

          <Route path="admin" element={<Admin />} >
            <Route path="pisos/:piso" element={<Piso />} />
            <Route
              index
              element={
                <p>Selecciona un piso</p>
              }
            />
          </Route>

          <Route path="buscar" element={<Buscar />} />
          <Route path="analiticas" element={<Analiticas />} />

        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Esta página no existe</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
