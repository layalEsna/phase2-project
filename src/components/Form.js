import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import '../App.css';
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
        <div className="form-container">
            <h1 className="title">Form</h1>
            <form onSubmit={handleSubmit}>
                <div  className="form-group">
                <input
                    className="form-input"
                    type="text"
                    value={ newQuote.text}
                    placeholder="Quote..."
                    name="text"
                    onChange={(e)=>handleInputs(e)}
                    />
                </div>
                <div  className="form-group">
                <input
                    className="form-input"
                    type="text"
                    value={ newQuote.author}
                    placeholder="Author..."
                    name="author"
                    onChange={ (e)=>handleInputs(e)}
                    />
                    </div>
                <button type="submit" className="form-button">Add a new quote</button>
            </form>
            <div>
                <p className="description">{newQuote.text}</p>
                <p>{newQuote.author}</p>
                
            </div>
        </div>
    )
}

export default Form
