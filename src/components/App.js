import '../App.css';
import QuotList from './QuotList';
import React, { useState, useEffect } from 'react';
import Search from './Search'
import Form from './Form';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [isToggled, setToggleQ] = useState({})
  const [searchByAuthor, setSearchByAuthor] = useState('')
  const [newQuote, setNewQuote] = useState({
    text: '',
    author: '',
    likes: 0
    
  })

    useEffect(() => {
        fetch('http://localhost:3001/quotes')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error fetching data!');
                }
                 return res.json();
            })
           .then(data => setQuotes(data))
          
            .catch(e => console.error(e));
    }, []);
  function handleToggle(qId) {
    setToggleQ(prev => ({
    ...prev, [qId]: !prev[qId]
    }))
    
  }
  function handleSearch(name) {
    setSearchByAuthor(name)
  }

  const newList = quotes.filter(quot => quot && quot.author && quot.author.toLowerCase().includes(searchByAuthor.toLowerCase()));

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
        res.json()
      })
      .then(data => {
        
        setQuotes(prev => [...prev, data])
        setNewQuote({
          text: '',
          author: ''
          
        })
      })
    .catch(e=> console.error(e))
  }

   return (
      <div className="App">
        <Search
          handleSearch={handleSearch}
          searchByAuthor={searchByAuthor}
        />
        <Form
          handleInputs={handleInputs}
          handleSubmit={handleSubmit}
          newQuote={newQuote}
        />
        <QuotList quotes={newList}
          handleToggle={handleToggle}
          isToggled={isToggled}
          
          
          
        />
        </div>
    );
}

export default App;