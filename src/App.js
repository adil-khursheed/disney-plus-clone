import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Detail from './components/Detail';
import Login from './components/Login';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/detail/:id' element={<Detail />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
