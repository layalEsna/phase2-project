///import React from "react";
import React, {useState} from 'react'
import { useOutletContext } from "react-router-dom";

function Search() {
   
const [searchByAuthor, setSearchByAuthor] = useState('')
 const [text, setText] = useState('') 
    const {quotes} = useOutletContext()
    
    // function handleNewSearch(e) {
    //     const searchAuthor = e.target.value
    //     handleSearch(searchAuthor)
         
    //     const filteredQuotes = quotes.filter(q =>
    //         q.author.toLowerCase().includes(searchAuthor.toLowerCase()))
    //     setText(filteredQuotes)
    // }

    function handleSearch(e) {
        setSearchByAuthor(e.target.value)
        //setSearchByAuthor(searchAuthor)
    }
    const newList = quotes.filter(quot => quot.author.toLowerCase().includes(searchByAuthor.toLowerCase()));

    
    return (
        <div>
            <h1>Search</h1>
            <div>
            <input
                placeholder="Search By Name..."
                onChange={handleSearch}
                value={searchByAuthor}

                />

            </div>
            <div>
        {searchByAuthor && (  
          newList.length > 0 ? (
            newList.map((quote, index) => (
              <div key={index}>
                <p>{quote.text}</p>
                <p>{quote.author}</p>
              </div>
            ))
          ) : (
            <p>No match</p>
          )
        )}
            
            </div>   
        </div>
    )
}

export default Search