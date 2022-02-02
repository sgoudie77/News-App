import React from 'react'
import { Link } from 'react-router-dom';

function BtnHome() {
    return (
        <div>
            <Link to="/"><button className="btn-home">Back to homepage</button></Link>
        </div>
    )
}

export default BtnHome;