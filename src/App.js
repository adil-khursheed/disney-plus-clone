import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Detail from './components/Detail';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/detail' element={<Detail />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
