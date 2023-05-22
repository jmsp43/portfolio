import React from 'react'
import './index.scss'
import Loader from 'react-loaders'
import { useState } from 'react'

export default function Contact() {

const [letterClassState, setLetterClassState] = useState('text-animate')

  setTimeout(() => {
    setLetterClassState('text-animate-hover')
}, 5000)

const contact = "Under Construction".split('')
const mapContact = contact.map((char, i) => {

  return (
<span className={`${letterClassState} _${i}`}>{char}</span>
)
})
    

    return (
      <>
      <div className = 'container contactPage'>
                <div className = 'textArea'>
                    <h1>
                      {mapContact}
                    </h1>
          </div>
            </div>
            <Loader type = 'pacman'/>
        </>
  )
}
