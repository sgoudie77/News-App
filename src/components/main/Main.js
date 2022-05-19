import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import News from './News';
import Headline from './Headline';


function Main(props) {

    const { newsList } = props;

    return (
        <div>
            <div className='main'>
                {newsList && <Headline headlines={newsList.articles[0]} />}
                {newsList && <Sidebar sidebarNews={newsList.articles.slice(1, 3)} />}
            </div>
            <div className='news-posts'>
                {newsList && <News bottomNewsList={newsList.articles.slice(3, 12)} />}
            </div>
        </div>
    )

}

export default Main;