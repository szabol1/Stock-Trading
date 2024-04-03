import NavBar from './components/Nav/NavBar';
import Chart from './components/Chart/Charts';
import React from 'react';
import LoginForm from './components/Login/Login';

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
