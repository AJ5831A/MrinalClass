import { useState } from 'react'
import './App.css'


function App() {

  const [quote , setQuote] = useState('');
  const [author , setAuthor] = useState('');
  const getQuote = async () =>{
      const response = await fetch('https://api.quotable.io/random')
      const data = await response.json()
      //console.log(data)
      setQuote(data.content)
      setAuthor(data.author)
      // console.log(quote)
      // console.log(author)
  }

  return (
    <>
      <p>{quote}</p>
      <p>{author}</p>
      <button onClick={getQuote}>Get Quote</button>
    </>
  )
}

export default App
