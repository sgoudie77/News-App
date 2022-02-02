import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import PageNotFound from './components/pageNotFound/PageNotFound';
import './css/main.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
          <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="*" exact element={<PageNotFound />} />
          </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
