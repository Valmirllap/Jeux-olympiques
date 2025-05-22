import './App.css'
import Layout from './pages/UI/Layout';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ticketing from './pages/Ticketing';
import Login from './pages/Login';
// import axios from "axios";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route element={<Home/>} path='/' />
          <Route element={<Ticketing/>} path='/ticketing'/>
          <Route element={<Login/>} path='/login' />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
