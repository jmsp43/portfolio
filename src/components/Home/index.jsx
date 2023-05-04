import './index.scss'
import LogoJ from '../../assets/images/logoJ.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
    const [letterClassState, setLetterClassState] = useState('text-animate')
    const nameArr = 'enna'.split()
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
                        <AnimatedLetters letterClass={letterClassState} strArray={nameArr} index={16} />
                        <img src={LogoJ} alt='letter logo' />
                        <br />
                        <AnimatedLetters letterClass={letterClassState} strArray={careerArr} index={20} />
                    </h1>

                    <h2>JavaScript | MongoDB | ExpressJS | ReactJS | NodeJS | Python | SQL </h2>
                    <br/>
                    <Link to = '/contact' className = 'button'>Contact Me</Link>
                </div>

            </div>
        </>
    )
}

export default Home;