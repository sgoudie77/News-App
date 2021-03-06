import React from 'react';
import NoImage from '../../img/noimage.jpg';


function SearchPagePost(props) {
  
    const dateObject = new Date(props.searchResultsPost.publishedAt);
    const dateDisplay = dateObject.toLocaleString("en-US", {weekday: "long", month: "long", day: "numeric"});
    const fallbackSrc = NoImage

    return (
    <div className='search-page-post'>
        <div className="search-page-post-content">
            <div className="search-page-post-image">
                {props.searchResultsPost.urlToImage && <img src={props.searchResultsPost.urlToImage} alt="News Story" />}
                {(!props.searchResultsPost.urlToImage || props.searchResultsPost.urlToImage == null) && <img src = {fallbackSrc} />}
            </div>
            <div className="search-page-post-title">
                <p>{dateDisplay}</p>
                <h3>{props.searchResultsPost.title}</h3>
            </div>
        </div>
        <div className="search-page-post-text">
            <p>{props.searchResultsPost.description} <a href={props.searchResultsPost.url} target="_blank"><span>Read More...</span></a></p>
        </div>
    </div>
  )
}

export default SearchPagePost