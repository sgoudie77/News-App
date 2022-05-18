import React from 'react';
import NoImage from '../../img/noimage.jpg';

function Headline(props) {
    
    // let dateFormat = '';

    // if (props.headlines.publishedAt !== undefined) {
    //     dateFormat = new Date(`${props.headlines.publishedAt}`).toLocaleDateString("sq-AL",{
    //         weekday: 'short',
    //         year: 'numeric', 
    //         month: 'short', 
    //         day: '2-digit'
    //     });
    // }
    
    const dateObject = new Date(props.headlines.published_at);
    const dateDisplay = dateObject.toLocaleString("en-US", {weekday: "long", month: "long", day: "numeric"});
    const fallbackSrc = NoImage

    return ( 
        <div className="headline">
            <h4>Top News Story</h4>
            <div className="headline-content">
                <div className="headline-img">
                    {props.headlines.image && <img src={props.headlines.image} alt="News Story" />}
                    {(!props.headlines.image || props.headlines.image == null) && <img src = {fallbackSrc} />}
                </div>
                <div className="headline-title">
                    <p>{dateDisplay}</p>
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