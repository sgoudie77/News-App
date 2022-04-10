import React, { useState } from 'react'



function SearchBar(props) {
    const [searchValue, setSearchValue] = useState('')
  
    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleOnClick = () => {
        props.getSearchRequest(searchValue)
        setSearchValue('')
    }

    return (
    <div className='search-bar'>
        <input type="text" value={searchValue} onChange={handleInputChange}></input>
        <button onClick={handleOnClick}><i className="fa fa-search"></i></button>
    </div>
  )
}

export default SearchBar