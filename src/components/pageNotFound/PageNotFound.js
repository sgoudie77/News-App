import React from 'react';
import BtnHome from '../buttons/BtnHome';


function PageNotFound() {
    return (
        <div className="page-not-found">
            <div>
                <h1>Page not found</h1>
            </div>
            <div>
                <BtnHome />
            </div>
        </div>
    )
}

export default PageNotFound;