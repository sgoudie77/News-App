import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import News from './News';
import Headline from './Headline';


function Main(props) {

    const { newsList } = props;

    return (
        <div>
            <div className='main'>
                {newsList && <Headline headlines={newsList.data[0]} />}
                {newsList && <Sidebar sidebarNews={newsList.data.slice(1, 3)} />}
            </div>
            <div className='news-posts'>
                {newsList && <News bottomNewsList={newsList.data.slice(3, 12)} />}
            </div>
        </div>
    )

}

export default Main;