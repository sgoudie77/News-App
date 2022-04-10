import React from 'react'
import NewsPost from './NewsPost'

function News(props) {
    
    return (
        <div className="news-posts-area">
            <h4>More News Stories</h4>
            <ul>{props.bottomNewsList.map((newsPost, index) => {
                return <li key={index}> {<NewsPost newsPost={newsPost} />} </li>
                })
            }
            </ul>
        </div>
    )
}

export default News;