import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Root from './Root'

function App() {
  return (
    <div className="App">
      <Header/>
      <Root />
      <Footer/>
    </div>
  );
}

export default App;
