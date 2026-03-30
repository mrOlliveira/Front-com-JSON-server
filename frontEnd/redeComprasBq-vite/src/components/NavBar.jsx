import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar({ onMenuClick }) {
    return (
      <nav style={{
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        backgroundColor: '#1a1f2e',
        borderBottom: '1px solid #00d2ff',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <button 
          onClick={onMenuClick}
          style={{ background: 'none', border: 'none', color: '#00d2ff', fontSize: '1.5rem', cursor: 'pointer', marginLeft: "1%", marginRight: '15px' }}
        >
          ☰
        </button>

        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', marginLeft: "0.5%" }}>
        <h2 style={{ color: 'white', margin: 0 }}>RedeCompras</h2>
        </Link>

        <Link to="/login" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', justifyContent: "right", marginLeft: "85%"}}>
          Login
        </Link>
      </nav>
    );
  }