import React from 'react'
import NoImage from '../../img/noimage.jpg';


function SearchPagePost(props) {
  
    const fallbackSrc = NoImage

    return (
    <div className='search-page-post'>
        <div className="search-page-post-content">
            <div className="search-page-post-image">
                {props.searchResultsPost.image && <img src={props.searchResultsPost.image} alt="News Story" />}
                {(!props.searchResultsPost.image || props.searchResultsPost.image == null) && <img src = {fallbackSrc} />}
            </div>
            <div className="search-page-post-title">
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