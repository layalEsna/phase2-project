import React from "react";

function Form({handleInputs, handleSubmit, newQuote}) {
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={ newQuote.text}
                    placeholder="Quote..."
                    name="text"
                    onChange={(e)=>handleInputs(e)}
                />
                <input
                    type="text"
                    value={ newQuote.author}
                    placeholder="Author..."
                    name="author"
                    onChange={ (e)=>handleInputs(e)}
                />
                <button type="submit">Add a new quote</button>
</form>
        </div>
    )
}

export default Form
//components