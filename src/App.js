import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import SearchPage from './components/search/SearchPage';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import PageNotFound from './components/pageNotFound/PageNotFound';
import './css/main.css';

 

function App() {
  
    var API_KEY = process.env.REACT_APP_API_KEY;
    const [category, setCategory] = useState('general')
    const [newsList, setNewsList] = useState(null);
    
    const categoryClick = (clickedCategory) => {

        if (localStorage.currentCategory !== clickedCategory){
            
            localStorage.currentCategory = clickedCategory

            localStorage.removeItem('currentNewsList')
            setCategory(clickedCategory)
        }
    }

    // set boolean for initial page load
    let isDataFromLocalStorage = false;

    // set variable from local storage
    let newsListFromLocalStorage = [];
    
    // set expiry time value
    const millisecondsInHour = 3600000;
    
    const getCurrentNewsList = () => {
        // const articleUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
        const articleUrl = `http://api.mediastack.com/v1/news?countries=us&categories=${category}&access_key=${API_KEY}`
        fetch(articleUrl)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            localStorage.removeItem('currentNewsList')
            localStorage.removeItem('expiry')
            localStorage.removeItem('currentCategory')

            console.log(data);
            setNewsList(data);
            
            localStorage.setItem('currentNewsList', JSON.stringify(data));
            localStorage.setItem('currentCategory', category);
            const currentTime = new Date();
            // set expiry
            const expiry = currentTime.getTime() + millisecondsInHour;
            localStorage.expiry = expiry;
        })
    }    
    
    useEffect(() => {
        if (!localStorage.currentNewsList) {
            getCurrentNewsList()
        }
    }, [category])


    // set the conditional here to check if the localStorage already has data
    if(localStorage.currentNewsList) {
        let currentNewsListExpiry = parseInt(localStorage.getItem('expiry'))
        let now = new Date() 
        
        if(now.getTime() > currentNewsListExpiry) {
            isDataFromLocalStorage = false;
            getCurrentNewsList()
        } else {
            isDataFromLocalStorage = true;
            newsListFromLocalStorage = JSON.parse(localStorage.getItem('currentNewsList'))
        } 
    }     
        
        
    return (
        <div className="App">
            <Router>
            <Navbar categoryClick={categoryClick} />
                <Routes>
                    <Route path="/" exact element={<Main newsList={isDataFromLocalStorage ? newsListFromLocalStorage : newsList} />} />
                    <Route path="/searchPage" exact element={<SearchPage />} />
                    <Route path="/about" exact element={<About />} />
                    <Route path="/contact" exact element={<Contact />} />
                    <Route path="*" exact element={<PageNotFound />} />
                </Routes>
            <Footer className="footer" />
            </Router>
        </div>
    );
}

export default App;
