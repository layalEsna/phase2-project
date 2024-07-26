import React from "react"
import QuotCard from "../components/QuotCard"
import { useOutletContext } from "react-router-dom"
import '../App.css'

function Home() {
  const {quotes, handleToggle, isToggled, handleLikes} = useOutletContext() 
   
  return (
      <div>
           <h1 className="title">Welcome to My Quote App</h1>
        
        <div className="home-container">
            {quotes.map(quote => (
                <QuotCard
                    key={quote.id}
                    quot={quote}
                    handleToggle={handleToggle}
                    isToggled={isToggled}
                    handleLikes={handleLikes}
                />
            ))}
        </div>
    </div>
);
}
export default Home