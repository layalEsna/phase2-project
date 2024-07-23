import React from "react";

function Search({ handleSearch, searchByAuthor }) {
    
    return (
        <div>
            <div>
            <input
                placeholder="Search By Name..."
                onChange={(e)=>handleSearch(e.target.value)}
                value={searchByAuthor}

                />
                </div>
        </div>
    )
}

export default Search