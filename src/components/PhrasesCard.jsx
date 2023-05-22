import React from 'react'

const PhrasesCard = ({phraseRandom}) => {

  return (
     <article className='card'>
      <img className="image" src="/rectangle1.svg" alt="" />
      <p className='phraseCard'>{phraseRandom.phrase}</p>
    </article>
  )
}

export default PhrasesCard