import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import PageNotFound from './components/pageNotFound/PageNotFound';
import './css/main.css';


function App() {
  
  const category = 'general';
  var API_KEY = process.env.REACT_APP_API_KEY;
  const [articleUrl, setArticleUrl] = useState(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
  const [newsList, setNewsList] = useState(null);
  const categoryClick = ( category ) => {
      console.log(`category: ${category}`);
      setArticleUrl(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`)
    }

  useEffect(() => {
      fetch(articleUrl)
      .then((response) => {
          return response.json();
      })
      .then(data => {
          console.log(data);
          setNewsList(data);
      })
  }, [articleUrl])

  return (
    <div className="App">
      <Router>
      <Navbar categoryClick={categoryClick} />
          <Routes>
              <Route path="/" exact element={<Main newsList={newsList} />} />
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
