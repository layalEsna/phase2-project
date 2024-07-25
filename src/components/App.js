import '../App.css';
////import QuotList from './QuotList';
import React, { useState, useEffect } from 'react';
////import Search from './Search'
////import Form from './Form';
import NavBar from '../pages/NavBar';
import { Outlet } from 'react-router-dom';
function App() {
  const [quotes, setQuotes] = useState([]);
  const [isToggled, setToggleQ] = useState({})
  
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
  //////


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
  function handleLikes(qId) {
    const quoteToUpdate = quotes.find(q => q.id === qId)
    const addLikes = {
      ...quoteToUpdate, likes: quoteToUpdate.likes + 1
      
      
    }
    fetch(`http://localhost:3001/quotes/${qId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        likes: addLikes.likes
      })
    })
      .then(res=> res.json())
      .then(() => {
        setQuotes(prev => prev.map(q => q.id === qId ?
      addLikes: q))
    })
    }

   return (
     <div className="App">
       <header>
         <NavBar/>
       </header>
       <Outlet
         context={{
          quotes,
          handleToggle,
          isToggled,
          handleLikes,
         
         
          handleInputs,
          handleSubmit,
          newQuote
         }}
       />
        {/* <Search
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
         handleLikes={handleLikes} />*/}
          
          
          
        
        </div>
    );
}

export default App;
