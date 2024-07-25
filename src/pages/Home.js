import React from "react"
import QuotCard from "../components/QuotCard"
import { useOutletContext } from "react-router-dom"


function Home() {
  const {quotes, handleToggle, isToggled, handleLikes} = useOutletContext() 
   
  return (
    <div>
        <h1>Home</h1>
        <div>
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