import React from 'react';
// import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

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
    
    return ( 
        <div className="headline">
            <div className="headline-img">
                <img src={props.headlines.urlToImage} alt="Headline News" />
            </div>
            <div className="headline-title">
                {/* <p>{props.headlines.publishedAt}</p> */}
                {/* <p>{dateFormat}</p> */}
                <h1>{props.headlines.title}</h1>
            </div>
            <div className="headline-text">
                <p>{props.headlines.description} <ExternalLink href={props.headlines.url}><span>Read More...</span></ExternalLink></p>
            </div>
        </div>
    )
}

export default Headline;