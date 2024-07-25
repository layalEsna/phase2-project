import React from "react";
import { useOutletContext } from "react-router-dom";

function Form() {
    const {handleInputs, handleSubmit, newQuote} = useOutletContext()
    return (
        <div>
            <h1>Form</h1>
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
