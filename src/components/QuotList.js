import React from 'react';
import QuotCard from './QuotCard';

function QuotList({ quotes, handleToggle, isToggled }) {
    return (
        <div>
            {quotes.map(quot => (
                <QuotCard
                    key={quot.id}
                    quot={quot}
                    handleToggle={handleToggle}
                    isToggled={isToggled}
                    
                    
                />
            ))}
        </div>
    );
}

export default QuotList;
