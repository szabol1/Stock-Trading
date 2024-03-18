import React from 'react';
import './navBar.css';
import logo from './logo.png';
export default function NavBar() {
  return (
  <div> 
   <main>
   <img className = "logo" src={logo} alt = "logo" />
      <nav>
        <ul>
          <li><a href = "/">Home</a></li>
          <li><a href = "/">Trade</a></li>
          <li><a href = "#">Portfolio</a></li>
          <li><a href = "/">News</a></li>
          <li><a href = "#">Login</a></li>
          <li><a href = "/">Account</a></li>
          <li><a href = "/">Register</a></li>
        </ul>
      </nav>
  </main>  
</div>
  );
}

