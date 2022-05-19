import React, { useState } from 'react';
import SearchBar from '../header/SearchBar';
import SearchPagePost from './SearchPagePost';



function SearchPage() {

  var API_KEY = process.env.REACT_APP_API_KEY;
  const [searchResults, setSearchResults] = useState([]);
  
  function getSearchRequest(searchValue) {
    
    const searchUrl = `https://newsapi.org/v2/everything?q=${searchValue}&pageSize=20&apiKey=${API_KEY}`
    
    fetch(searchUrl)
    .then((response) => {
        return response.json();
    })
    .then(searchData => {
        console.log(searchData);
        setSearchResults(searchData.articles);
    })
}

  return (
    <div className='search-page'>
      <SearchBar getSearchRequest={getSearchRequest} />
      <div className='search-results'>
        <ul>{searchResults && searchResults.map((searchResultsPost, index) => {
          return <li key={index}> {<SearchPagePost searchResultsPost={searchResultsPost} />} </li>
          })
        }
        </ul>
      </div>
    </div>
  )
}

export default SearchPage