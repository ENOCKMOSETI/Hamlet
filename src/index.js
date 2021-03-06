import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const TODOS = [
  {
    id: 1,
    name: 'Wake up',
    completed: true
  },
  {
    id: 2,
    name: 'Read Shakespeare',
    completed: true
  },
  {
    id: 3,
    name: 'Style this app',
    completed: false
  },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={TODOS} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
