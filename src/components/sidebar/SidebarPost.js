import React from 'react';
import NoImage from '../../img/noimage.jpg';

function SidebarPost(props) {
    
    const fallbackSrc = NoImage
    
    return (
        <div className="sidebar-post">
            <div className="sidebar-image">
                {props.sidebarPost.urlToImage && <img src={props.sidebarPost.urlToImage} alt="News Story" />}
                {(!props.sidebarPost.urlToImage || props.sidebarPost.urlToImage == null) && <img src = {fallbackSrc} />}
            </div>
            <div className="sidebar-title">
                <h3>{props.sidebarPost.title}</h3>
            </div>
            <div className="sidebar-text">
                <p>{props.sidebarPost.description} <a href={props.sidebarPost.url} target="_blank"><span>Read More...</span></a></p>
            </div>
        </div>
    )
}

export default SidebarPost;