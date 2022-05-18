import React from 'react'
import BtnHome from '../buttons/BtnHome'

function About() {
    return (
        <div className="about">
            <div className='about-info'>
                <h1>About This News App</h1>
                <h2>What is this app?</h2>
                <p>
                    This is a responsive React app using a fetch API called Mediastack API. This app was created with both class and functional components for learning and practice purposes while building this project as part of a web development program. This app also makes use of React hooks (i.e. useEffect, useState, and useLocation) for the functionality, as well as Router V6.2.1 to link to it's pages and components.
                </p>
                <h2>How can I use this news app?</h2>
                <p>
                    This news app displays news stories by clicking on the different topics in the navbar, with the default news category set as 'General' on initial page load. Users can also click on the 'Search GNS' button in the top right of the navbar to search for additional topics to be displayed on the search page by typing keywords or phrases in the search bar provided.
                </p>
                <h2>Why this API was used</h2>
                <p>
                    This API was chosen because it is free for developes and it is easy to use to build projects. It also allows users to search news stories by category, and it has enough free API calls available for testing compared to some other APIs that are available. In addition, the documentation is very clear, thorough, and easy to follow.
                </p>
                <h2>Limitation of this app</h2>
                <p>
                    Since this project uses the free plan for this API, it is limited to 500 calls per month. Also, the free plan only returns delayed news data instead of live news data, and there are only missing images in the API responses. In addition, the data returned in each API call does not contain any content for each article, only a short description, so an external link is provided for users to go to the source and read the full news article.                
                </p>
                <h2>Future improvements</h2>
                <p>
                    To improve the user's experience of this app, in the future I would like to continue developing and adding more features to this app such as improving the performance of this app by optimizing useLocation hook and displaying the api response data faster, adding a rotating news feed for articles displayed in the sidebar component, and incorporating infinite scroll pagination for displaying API results on the search page.
                </p>
            </div>
            <div className='about-btn'>
                <BtnHome />
            </div>
        </div>
    )
}

export default About