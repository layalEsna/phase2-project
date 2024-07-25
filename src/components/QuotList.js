import React from 'react';
import QuotCard from './QuotCard';

function QuotList({ quotes, handleToggle, isToggled, handleLikes}) {
    return (
        <div>
            {quotes.map(quot => (
                <QuotCard
                    key={quot.id}
                    quot={quot}
                    handleToggle={handleToggle}
                    isToggled={isToggled}
                    handleLikes={handleLikes}
                    
                />
            ))}
        </div>
    );
}

export default QuotList;
