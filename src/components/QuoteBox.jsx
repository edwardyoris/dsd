import React from 'react'
import Btn from './Btn'


const QuoteBox = ({ ranQuote, ranColor, obtenRanClick }) => {

    const colorTexto = {
        color: ranColor
    }

    return (
        <article style={colorTexto} className='tarjeta'>
            <p className='tarjeta__p'>{ranQuote.quote}</p>
            <h1 className='tarjeta__h1'>{ranQuote.author}</h1>
            <Btn ranQuote={ranQuote} ranColor={ranColor} obtenRanClick={obtenRanClick} />
        </article>
    )
}

export default QuoteBox