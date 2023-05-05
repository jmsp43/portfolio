import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'

export default function About() {
  const [letterClassState, setLetterClassState] = useState('text-animate')

  setTimeout(() => {
    setLetterClassState('text-animate-hover')
  }, 5000)
  
  const aboutMe = 'About Me'.split('')
  const mapAbout = aboutMe.map((char, i) => {
    return (
        <span className={`${letterClassState} _${i}`}>{char}</span>
    )
})

  return (
    <div className='container aboutPage'>
      <div className = 'textArea'>
        <h1>
          {/* <AnimatedLetters letterClass={letterClassState} strArr={('About Me'.split())}
            index={15} /> */}
          {mapAbout}
        </h1>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores at qui error odio repellat minus blanditiis dicta a ut eum eveniet neque, reprehenderit facere, sequi perspiciatis dolorum cupiditate earum.</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam, nesciunt quisquam debitis tempore expedita ducimus, cupiditate inventore magni ex architecto beatae, ipsum doloribus maiores voluptatibus molestiae dolorem odit. Autem.</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In vel saepe numquam consequuntur incidunt, dolorem eveniet illo vitae adipisci dolor explicabo architecto nam voluptas placeat molestiae sapiente omnis veniam voluptatum.</p>
      </div>
    </div>
  )
}
