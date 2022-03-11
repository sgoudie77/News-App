import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import PageNotFound from './components/pageNotFound/PageNotFound';
import './css/main.css';

 
/* 
category intervals for each category
general - 
*/


// const currentTime = new Date();
// const secondsInHour = function convertHourstoSeconds(hours) {
//         return Math.floor(hours * 60 * 60);
//     };

// const expiry = currentTime.getTime() + (secondsInHour(currentTime) * 1000);
// localStorage.expiry = expiry;

// if (!localStorage.currentNewsList) {

// }


function App() {
  
    var API_KEY = process.env.REACT_APP_API_KEY;
    const category = 'general';
    const [newsList, setNewsList] = useState(null);
    const [articleUrl, setArticleUrl] = useState(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
    
    const categoryClick = (category) => {
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
            localStorage.setItem('currentNewsList', JSON.stringify(data));
            const currentNewsList = JSON.parse(localStorage.getItem('currentNewsList'));
            console.log('localStorage');
            console.log(currentNewsList);
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
