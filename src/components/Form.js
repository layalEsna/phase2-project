import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Form() {
    const {setQuotes}= useOutletContext()
    const [newQuote, setNewQuote] = useState({
        text: '',
        author: '',
        likes: 0
        
    })
    
    function handleInputs(e) {
        const { name, value } = e.target
        setNewQuote(prev=> ({
          ...prev, [name]: value
        }))
      }
    
      function handleSubmit(e) {
        e.preventDefault()
    
    
        fetch('http://localhost:3001/quotes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newQuote)
        })
          .then(res => {
            if (!res.ok) {
              throw new Error('Error adding data!')
            }
            return res.json()
          })
          .then(data => {
            
            setQuotes(prev => [...prev, data])
            setNewQuote({
              text: '',
              author: '',
              likes: 0
            })
          })
        .catch(e=> console.error(e))
      }
    
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
            <div>
                <p>{newQuote.text}</p>
                <p>{newQuote.author}</p>
                
            </div>
        </div>
    )
}

export default Form
