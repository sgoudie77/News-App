import React from 'react';
import NoImage from '../../img/noimage.jpg';

function NewsPost(props) {
    
    const dateObject = new Date(props.newsPost.publishedAt);
    const dateDisplay = dateObject.toLocaleString("en-US", {weekday: "long", month: "long", day: "numeric"});
    const fallbackSrc = NoImage

    return ( 
        <div className="news-post">
            <div className="news-post-content">
                <div className="news-post-image">
                    {props.newsPost.urlToImage && <img src={props.newsPost.urlToImage} alt="News Story" />}
                    {(!props.newsPost.urlToImage || props.newsPost.urlToImage == null) && <img src = {fallbackSrc} />}
                </div>
                <div className="news-post-title">
                    <p>{dateDisplay}</p>
                    <h3>{props.newsPost.title}</h3>
                </div>
            </div>
                <div className="news-post-text">
                    <p>{props.newsPost.description}</p> <a href={props.newsPost.url} target="_blank">Read More...</a>
                </div>
        </div>
    )
}

export default NewsPost;