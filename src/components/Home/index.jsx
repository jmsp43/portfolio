import './index.scss'
import LogoJ from '../../assets/images/logoJ.png'
import cakeE from '../../assets/images/cakeE.png'
import cakeN from '../../assets/images/cakeN.png'
import cakeA from '../../assets/images/cakeA.png'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClassState, setLetterClassState] = useState('text-animate')
    const careerArr = 'Software Engineer'.split('')

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClassState('text-animate-hover')
    //     }, 5000)
    // }, [])

    setTimeout(() => {
                setLetterClassState('text-animate-hover')
            }, 5000)

    const intro = "Hey, I'm".split('')
    const mapIntro = intro.map((char, i) => {
        // console.log(i)
        return (
            <span className={`${letterClassState} _${i}`}>{char}</span>
        )
    })

    const mapCareer = careerArr.map((char, i) => {
        // console.log(i)
        return (
            <span className={`${letterClassState} _${i}`}>{char}</span>
        )
    })

    return (
        <>
            <div className='container homePage'>
                <div className='textArea'>
                    <h1>
                        {mapIntro}
                        <br />
                        <img src={LogoJ} width = '125px' height = '125px' alt='letter logo' />
                        <img src={cakeE} width = '80px' height = '80px' alt='letter logo' />
                        <img src={cakeN} width = '125px' height = '125px' alt='letter logo' />
                        <img src={cakeN} width = '125px' height = '125px' alt='letter logo' />
                        <img src={cakeA} width = '105px' height = '105px' alt='letter logo' />
                        <br />
                        {mapCareer}
                    </h1>

                    <h2>JavaScript | MongoDB | ExpressJS | ReactJS | NodeJS | Python | SQL </h2>
                    <br/>
                </div>


            </div>
            <Loader type = 'pacman'/>
        </>
    )
}

export default Home;