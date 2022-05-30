import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Graham from './components/graham';
import TaskList from './components/taskList';
import Login from './components/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/graham" element={<TaskList/>}/>
      <Route path="/graham/:grahamTaskId" element={<Graham/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
