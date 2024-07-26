
import React from 'react';

function QuotCard({ quot, handleToggle, isToggled, handleLikes}) {
    return (
        <div>
            {isToggled[quot.id] ? (<div onClick={() => handleToggle(quot.id)} className='large'><p className='blue'>---<em className='cc'>c</em><em className='l'>l</em><em className='i'>i</em><em className='c'>c</em><em className='k'
                    >k</em>---</p>  {quot.text}</div>) :
                (<div onClick={() => handleToggle(quot.id)}><p className='blue'>
                    ---<em className='cc'>c</em><em className='l'>l</em><em className='v'>i</em><em className='c'>c</em><em className='k'
                    >k</em>---</p> {quot.text}</div>)}
            
            <p><em>{quot.author}</em></p>
            <p>Likes: <button onClick={()=>handleLikes(quot.id)}>{quot.likes}</button></p>
         
            
        </div>
    );
}

export default QuotCard;