import React from 'react';
import NoImage from '../../img/noimage.jpg';

function SidebarPost(props) {
    
    const dateObject = new Date(props.sidebarPost.publishedAt);
    const dateDisplay = dateObject.toLocaleString("en-US", {weekday: "long", month: "long", day: "numeric"});
    const fallbackSrc = NoImage
    
    return (
        <div className="sidebar-post">
            <div className="sidebar-image">
                {props.sidebarPost.urlToImage && <img src={props.sidebarPost.urlToImage} alt="News Story" />}
                {(!props.sidebarPost.urlToImage || props.sidebarPost.urlToImage == null) && <img src = {fallbackSrc} />}
            </div>
            <div className="sidebar-title">
                <p>{dateDisplay}</p>
                <h3>{props.sidebarPost.title}</h3>
            </div>
            <div className="sidebar-text">
                <p>{props.sidebarPost.description}</p> <a href={props.sidebarPost.url} target="_blank">Read More...</a>
            </div>
        </div>
    )
}

export default SidebarPost;