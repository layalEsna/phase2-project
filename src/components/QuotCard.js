
import React from 'react';

function QuotCard({ quot, handleToggle, isToggled}) {
    return (
        <div>
            {isToggled[quot.id] ? (<div onClick={() => handleToggle(quot.id)} className='large'><p className='blue'>---click---</p>  {quot.text}</div>) :
                (<div onClick={() => handleToggle(quot.id)}><p className='blue'>---click---</p> {quot.text}</div>)}
            
            <p><em>{quot.author}</em></p>
            <p>Likes: <button>{quot.likes}</button></p>
            
        </div>
    );
}

export default QuotCard;