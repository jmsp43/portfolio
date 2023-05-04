import './index.scss'
import LogoJ from '../../assets/images/logoJ.png'
import cakeE from '../../assets/images/cakeE.png'
import cakeN from '../../assets/images/cakeN.png'
import cakeA from '../../assets/images/cakeA.png'
import name from '../../assets/images/subLogoJ.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
    const [letterClassState, setLetterClassState] = useState('text-animate')
    const careerArr = 'Software Engineer'.split()

    useEffect(() => {
        return setTimeout(() => {
            setLetterClassState('text-animate-hover')
        }, 4000)
    }, [])


    return (
        <>
            <div className='container homePage'>
                <div className='textArea'>
                    <h1>
                        <span className={letterClassState}>H</span>
                        <span className={`${letterClassState} _12`}>e</span>
                        <span className={`${letterClassState} _13`}>y, </span>
                        <span className={`${letterClassState} _14`}> I</span>
                        <span className={`${letterClassState} _15`}>'m</span>
                        <br />
                        <img src={LogoJ} width = '125px' height = '125px' alt='letter logo' />
                        <img src={cakeE} width = '80px' height = '80px' alt='letter logo' />
                        <img src={cakeN} width = '125px' height = '125px' alt='letter logo' />
                        <img src={cakeN} width = '125px' height = '125px' alt='letter logo' />
                        <img src={cakeA} width = '105px' height = '105px' alt='letter logo' />
                        <br />
                        <AnimatedLetters letterClass={letterClassState} strArray={careerArr} index={16} />
                    </h1>

                    <h3>JavaScript | MongoDB | ExpressJS | ReactJS | NodeJS | Python | SQL </h3>
                    <br/>
                    <br/>
                <h2>My Projects</h2>
                <div className='projectSection'>
                    <div className='weather'>
                            <img/>
                        <p>image of weather app with description below it</p>
                    </div>

                    <div className='trails'>
                            <img/>
                        <p>image of trails game with description below it</p>
                    </div>

                    <div className='en forme'>
                            <img />
                        <p>image of exercise app with description below it</p>
                    </div>

                </div>
                </div>


            </div>
        </>
    )
}

export default Home;