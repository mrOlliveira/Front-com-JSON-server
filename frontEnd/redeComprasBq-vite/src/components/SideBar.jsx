import React from 'react';
export default function SideBar({ isOpen }) {
  return (
    <div style={{
      width: '200px',
      height: '100vh',
      backgroundColor: '#1a1f2e',
      color: 'white',
      position: 'fixed',
      left: isOpen ? '0' : '-200px', 
      top: 0,
      padding: '80px 20px 20px 20px',
      boxShadow: '2px 0 10px rgba(0,0,0,0.5)',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      transition: 'left 0.3s ease',
      zIndex: 999
    }}>
      
      <h3 style={{ 
        fontSize: '0.85rem', 
        color: '#00d2ff', 
        letterSpacing: '1px',
        marginBottom: '5px' 
      }}>
        FILTRAR POR
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <label style={filterLabelStyle}>
          <input type="checkbox" style={checkboxStyle} /> 
          Disponíveis
        </label>
        
        <label style={filterLabelStyle}>
          <input type="checkbox" style={checkboxStyle} /> 
          Menor Preço
        </label>
      </div>

    </div>
  );
}

const filterLabelStyle = {
  fontSize: '0.9rem',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  color: '#e0e0e0',
  transition: 'color 0.2s'
};

const checkboxStyle = {
  marginRight: '12px',
  cursor: 'pointer',
  accentColor: '#00d2ff'
};