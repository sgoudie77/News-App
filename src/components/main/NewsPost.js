import React from 'react';
import NoImage from '../../img/noimage.jpg';

function NewsPost(props) {
    
    const fallbackSrc = NoImage
// check styles
    return ( 
        <div className="news-post">
            <div className="news-post-content">
                <div className="news-post-image">
                    {props.newsPost.image && <img src={props.newsPost.image} alt="News Story" />}
                    {(!props.newsPost.image || props.newsPost.image == null) && <img src = {fallbackSrc} />}
                </div>
                <div className="news-post-title">
                    <h3>{props.newsPost.title}</h3>
                </div>
            </div>
                <div className="news-post-text">
                    <p>{props.newsPost.description} <a href={props.newsPost.url} target="_blank"><span>Read More...</span></a></p>
                </div>
        </div>
    )
}

export default NewsPost;