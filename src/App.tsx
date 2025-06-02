import React from 'react';
import Login from './components/Login';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Playfair Display', serif;
    background: #1a1a2e;
  }

  ::selection {
    background: rgba(255, 215, 0, 0.3);
    color: #ffd700;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Login />
    </>
  );
}

export default App; 