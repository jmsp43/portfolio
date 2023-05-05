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
        <p>Creative soul with a love for math and a keen eye for detail. Love meeting new people, collaborating on projects, and learning new things. Inside of the tech sphere: currently learning TypeScript! Outside of the tech sphere, I'm learning French!</p>
        <br/>
        <p>I'm passionate about bringing a forward-thinking mindset and a focus on innovation and ingenuity to any project I work on, and would love to join a team with as much drive to create tangible, positive change for those who encounter our work as I do.</p>
        <br/>
        <p>Ever since my first job as a math tutor in my sophomore year of high school, and I always dreamed of a way to not only reconcile, but harness both my problem-solving, analytical nature with my creative, free-thinking industriousness, and software engineering has done all that and more.</p>
        <br />
        <p>A few photos of me having the time of my life:</p>
      </div>
    </div>
  )
}
