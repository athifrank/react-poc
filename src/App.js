import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Row,Col} from 'react-bootstrap'
import Root from './Root'

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{flex:1}}>
      <Root />
      </div>
      <Footer />
    </div>
  );
}

export default App;
