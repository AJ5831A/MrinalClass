import './App.css'
import Navbar from './Components/Navbar.jsx'
import Cards from './Components/Cards.jsx'

function App() {

  return (
    <>
      <h1>Hello There!</h1>
      <Navbar/>
      <Cards title="Card 1" description="This is the description of Card 1."/>
      <Cards title="Card 2" description="This is the description of Card 2."/>
      <Cards title="Card 3" description="This is the description of Card 3."/>
    </>
  )
}

export default App
