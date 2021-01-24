import React from 'react';
import './style.css';





function QuoteCard({ quotes }) {
  
  return (
    <div>
      <figure className="QuoteCard">
        <img src={quotes.image} alt={quotes.characterDirection} />        
        <figcaption>
          <blockquote>{quotes.quote}</blockquote>
          <p>
            <cite>{quotes.character}</cite>
          </p>
        </figcaption>
      </figure>
    </div>
  );
};


export default QuoteCard;