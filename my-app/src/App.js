import NavBar from './components/Nav/NavBar';
import Chart from './components/Chart/Charts';
import Login from "./Pages/Login/Login";
import React from 'react';
import LoginForm from './Pages/Login/Login';

function App() {
  return (
    <div>
        <NavBar />
        <LoginForm />
        <Chart />
    </div>
  );
}

export default App;
