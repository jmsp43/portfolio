import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import mongoDB from '../../assets/images/mongoDB.png';
import sql from '../../assets/images/sql.png'
import Loader from 'react-loaders'

export default function About() {
  const [letterClassState, setLetterClassState] = useState('text-animate')

  setTimeout(() => {
    setLetterClassState('text-animate-hover')
  }, 2000)
  
  const aboutMe = 'About Me'.split('')
  const mapAbout = aboutMe.map((char, i) => {
    return (
        <span className={`${letterClassState} _${i}`}>{char}</span>
    )
})

  return (
    <>
    <div className='container aboutPage'>
      <div className = 'textArea'>
        <h1>
          {mapAbout}
        </h1>
        <br/>
        <p>Creative soul with a love for math and a keen eye for detail. Love meeting new people, collaborating on projects, and learning new things. Inside of the tech sphere: currently learning TypeScript! Outside of the tech sphere, I'm learning French!</p>
        <br/>
        <p>I'm passionate about bringing a forward-thinking mindset and a focus on innovation and ingenuity to any project I work on, and would love to join a team with as much drive to create tangible, positive change for those who encounter our work as I do.</p>
        <br/>
        <p>Ever since my first job as a math tutor in my sophomore year of high school, I always dreamt of a way to not only reconcile, but harness both my problem-solving, analytical nature with my creative, free-thinking industriousness, and software engineering has done all that and more.</p>
        <br />
      </div>

      <div className='cube-container'>
        <div className='spinner'>

          <div className = 'face1'>
            <FontAwesomeIcon icon = {faNodeJs} color = 'chartreuse'></FontAwesomeIcon>
          </div>

          <div className = 'face2'>
            <FontAwesomeIcon icon = {faJsSquare} color = 'yellow'></FontAwesomeIcon>
          </div>

          <div className = 'face3'>
            <FontAwesomeIcon icon = {faReact} color = 'lightblue'></FontAwesomeIcon>
          </div>

          <div className = 'face4'>
            <img width = '100px' height = '100px' src={mongoDB}/>
          </div>

          <div className = 'face5'>
            <FontAwesomeIcon icon = {faPython} color = 'blue'></FontAwesomeIcon>
          </div>

          <div className = 'face6'>
            <img width = '100px' height = '100px' src={sql}/>
          </div>

        </div>

      </div>
      </div>
      <Loader type= 'pacman'/>
      </>
  )
}
