import { useState } from 'react'
import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCard from './components/PhrasesCard'
import phrases from './utils/phrases.json'
import randomElement from './utils/randomElement'


const arrBackground = [1,2,3,4]

function App() {

  const [phraseRandom, setPhraseRandom] = useState(randomElement(phrases))
  const [pathRandom, setPathRandom] = useState(randomElement(arrBackground))

  const objStyle = {
    backgroundImage: `url('/fondo${pathRandom}.jpg')`
  }

  return (
    <>
    <div style={objStyle} className='app'>
      <h1>GALLETAS DE LA FORTUNA</h1>
      <PhrasesCard phraseRandom = {phraseRandom}/>
      <ButtonPhrase setPhraseRandom={setPhraseRandom}  setPathRandom={setPathRandom} arrBackground = {arrBackground}/>
    </div>
    </>
  )
}

export default App
