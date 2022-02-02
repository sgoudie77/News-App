import React from 'react';
import SidebarPost from './SidebarPost';

function Sidebar(props) {
    
    // map((element, index, array) => { ... })
    return (
        <div className="sidebar">
            <ul>{props.sidebarNews.map((sidebarPost, index) => {
                return <li key={index}> {<SidebarPost sidebarPost={sidebarPost} />} </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar;