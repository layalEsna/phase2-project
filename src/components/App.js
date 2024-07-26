import '../App.css';

import React, { useState, useEffect } from 'react';
import NavBar from '../pages/NavBar';
import { Outlet } from 'react-router-dom';
// import { ReactDOM } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import AppRoutes from './AppRoutes';
function App() {
  const [quotes, setQuotes] = useState([]);
  const [isToggled, setToggleQ] = useState({})
  
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
  function handleLikes(qId) {
    const quoteToUpdate = quotes.find(q => q.id === qId)
    if(!quoteToUpdate) return
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
    .catch(e=> console.error(e))
    }

   return (
     <div className="App">
       
       
       <header>
         <NavBar/>
       </header>
       <Outlet
         context={{
           quotes,
           setQuotes,
          handleToggle,
          isToggled,
          handleLikes,
         }}
       />
        
          
          
          
        
        </div>
    );
}

export default App;
