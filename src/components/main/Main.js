import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import News from './News';
import Headline from './Headline';

function Main() {

    const [newsList, setNewsList] = useState(null);
    
    var API_KEY = process.env.REACT_APP_API_KEY;
    
    // const [articleUrl, setArticleUrl] = useState(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`);
    const [articleUrl, setArticleUrl] = useState(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&languages=en&countries=us`);

    useEffect(() => {
        fetch(articleUrl)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            setNewsList(data);
        })
    }, [])

    return (
        <div>
            <div className='main'>
                {/* {newsList && <Headline headlines={newsList.articles[0]} />}
                {newsList && <Sidebar sidebarNews={newsList.articles.slice(1, 3)} />} */}
                {newsList && <Headline headlines={newsList.data[0]} />}
                {newsList && <Sidebar sidebarNews={newsList.data.slice(1, 3)} />}
            </div>
            <div className='news-posts'>
                {/* {newsList && <News bottomNewsList={newsList.articles.slice(3, 9)} />} */}
                {newsList && <News bottomNewsList={newsList.data.slice(3, 12)} />}
            </div>
        </div>
    )

}

export default Main;