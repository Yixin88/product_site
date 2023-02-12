import React from 'react' 
import {
    Outlet,
    NavLink
  } from "react-router-dom";
import Footer from '../components/Footer';
  

export default function RootLayout({cartCounter}){
    return (
      <div className="App">
          <header className="App-header">
            <h1 className='logo'>no-brand</h1>
            <nav>
              <NavLink className="nav-link" to='/'>home </NavLink>
              <NavLink className="nav-link" to='about'> about </NavLink>
              <NavLink className="nav-link" to='cart'> cart <span>{cartCounter}</span> </NavLink>
            </nav>
          </header>
            <hr />
         <Outlet />
         {/* <Footer/> */}
       </div>
    )
  }