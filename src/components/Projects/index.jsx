import React from 'react'
import './index.scss'
import Loader from 'react-loaders'
import { useState } from 'react'
import trails from '../../assets/images/trailsLanding.png'
import weather from '../../assets/images/weather.png'
import todo from '../../assets/images/todo.png'

export default function Projects() {

const [letterClassState, setLetterClassState] = useState('text-animate')

  setTimeout(() => {
    setLetterClassState('text-animate-hover')
}, 5000)

const projects = "My Projects".split('')
const mapProjects = projects.map((char, i) => {

  return (
<span className={`${letterClassState} _${i}`}>{char}</span>
)
})
    

    return (
      <>
      <div className = 'container projectsPage'>
                <div className = 'projTextArea'>
                    <h1>
                      {mapProjects}
                    </h1>
                    <div classname='projectsContainer'>
                        <div className = 'projContainer'>
                            <div classname = 'trails'>
                                <img src={trails} height = '130px' width = '150px' />
                                <p>Project Here</p>
                            </div>
                        </div>

                        <div className = 'projContainer'>
                            <div classname = 'weather'>
                                <img src={weather} height = '130px' width = '150px' />
                                <p>Project Here</p>
                            </div>
                        </div>

                        <div className = 'projContainer'>
                            <div classname = 'enForme' >
                                <img src = '' height = '130px' width = '150px'/>
                                <p>Project Here</p>
                            </div>
                        </div>

                        <div className = 'projContainer'>
                            <div classname = 'snake'>
                                <img src='' height = '130px' width = '150px' />
                                <p>Project Here</p>
                            </div>
                        </div>

                        <div className = 'projContainer'>
                            <div classname = 'todo'>
                                <img src={todo} height = '130px' width = '150px' />
                                <p>Project Here</p>
                            </div>
                        </div>

                        <div className = 'projContainer'>
                            <div classname = 'otherProj'>
                                <img src='' />
                                <p>Project Here</p>
                            </div>
                        </div>

                    </div>
          </div>
            </div>
            <Loader type = 'pacman'/>
        </>
  )
}
