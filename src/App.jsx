import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import color from './utils/color'

function App() {

  const obtenIndiceRan = longitud => Math.floor(Math.random() * longitud.length)

  const primerElementoQuotes = quotes[obtenIndiceRan(quotes)]
  const [ranQuote, setranQuote] = useState(primerElementoQuotes)

  const primerElementoColor = color[obtenIndiceRan(color)]
  const [ranColor, setranColor] = useState(primerElementoColor)

  const fondoApp = {
    backgroundColor: ranColor
  }

  const obtenRanClick = () => {
    setranQuote(quotes[obtenIndiceRan(quotes)])
    setranColor(color[obtenIndiceRan(color)])
  }

  return (
    <div style={fondoApp} className="App">
      <QuoteBox ranQuote={ranQuote} ranColor={ranColor} obtenRanClick={obtenRanClick} />
    </div>
  )
}

export default App
