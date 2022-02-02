import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';


function NewsPost(props) {
    
    return (
        <div className="news-post">
            {/* <div className="category-title">
                <h3>Category Title</h3>
            </div> */}
            <div className="news-post-content">
                <div className="news-post-image">
                    <img src={props.newsPost.urlToImage} alt="News Story" />
                </div>
                <div className="news-post-title">
                    <h3>{props.newsPost.title}</h3>
                </div>
            </div>
                <div className="news-post-text">
                    <p>{props.newsPost.description} <ExternalLink href={props.newsPost.url}><span>Read More...</span></ExternalLink></p>
                </div>
        </div>
    )
}

export default NewsPost;