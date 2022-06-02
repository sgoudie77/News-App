import React from 'react';
import NoImage from '../../img/noimage.jpg';

function Headline(props) {
    
    const dateObject = new Date(props.headlines.publishedAt);
    const dateDisplay = dateObject.toLocaleString("en-US", {weekday: "long", month: "long", day: "numeric"});
    const fallbackSrc = NoImage

    return ( 
        <div className="headline">
            <h4>Top News Story</h4>
            <div className="headline-content">
                <div className="headline-img">
                    {props.headlines.urlToImage && <img src={props.headlines.urlToImage} alt="News Story" />}
                    {(!props.headlines.urlToImage || props.headlines.urlToImage == null) && <img src = {fallbackSrc} />}
                </div>
                <div className="headline-title">
                    <p>{dateDisplay}</p>
                    {/* <p className='author'>Author: {props.headlines.author}</p> */}
                    <p className='source'>Source: {props.headlines.source.name}</p>
                    <h1>{props.headlines.title}</h1>
                </div>
                <div className="headline-text">
                    <p>{props.headlines.description} <a href={props.headlines.url} target="_blank"><span>Read More...</span></a></p>
                </div>
            </div>
        </div>
    )
}

export default Headline;