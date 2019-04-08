import React from 'react' ;

const SimpsonsQuote = ({quote}) => {
    return (
        <div className="SimpsonsQuote">
        
        <ul>
            <li>Quote : {quote.quote}</li>
            <li>
            Name : {quote.character}
            </li>
            <li>Image : <img src={quote.image} alt="picture" /></li>
        </ul>
        </div>
    )
}
export default SimpsonsQuote;