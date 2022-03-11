import React from 'react';
import SidebarPost from './SidebarPost';

function Sidebar(props) {
    
    // map((element, index, array) => { ... })
    return (
        <div className="sidebar">
            <h4>Headline News</h4>
            <ul>{props.sidebarNews.map((sidebarPost, index) => {
                return <li key={index}> {<SidebarPost sidebarPost={sidebarPost} />} </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar;