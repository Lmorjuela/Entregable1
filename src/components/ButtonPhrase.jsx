import React from 'react'
import phrases from '../utils/phrases.json'
import randomElement from '../utils/randomElement'


const ButtonPhrase = ({setPhraseRandom, setPathRandom, arrBackground}) => {
    
  const handleRandom = () => {
    setPhraseRandom(randomElement(phrases))
    setPathRandom(randomElement(arrBackground))
  }

  return (
    <button className='button'   onClick={handleRandom}>Ver otro</button>
  )
}

export default ButtonPhrase