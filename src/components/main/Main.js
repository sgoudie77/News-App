import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import News from './News';
import Headline from './Headline';


function Main(props) {

    // const [newsList, setNewsList] = useState(null);

    // var API_KEY = process.env.REACT_APP_API_KEY;

    // const [articleUrl, setArticleUrl] = useState(`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${API_KEY}`);

    // useEffect(() => {
    //     fetch(articleUrl)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //         setNewsList(data);
    //     })
    // }, [articleUrl])

    const { newsList } = props;

    return (
        <div>
            <div className='main'>
                {newsList && <Headline headlines={newsList.articles[0]} />}
                {newsList && <Sidebar sidebarNews={newsList.articles.slice(1, 3)} />}
            </div>
            <div className='news-posts'>
                {newsList && <News bottomNewsList={newsList.articles.slice(3, 9)} />}
            </div>
        </div>
    )

}

export default Main;