import Header from '../Header/Header'
import './Hero.css'
import HeroImg from '../../img/hero.png'
import Heart from '../../img/heart.png'
import ImageBack from '../../img/hero-img-back.png'

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
            {/* The best ad*/}
            <div className="the-best-ad">
              <div></div>
              <span>the best fitness club in town</span> 
            </div>
            {/* Hero Heading*/}
            <div className="hero-text">
              <div>
                <span className='stroke-text'>SHAPE </span>
                <span>YOUR</span>   
              </div>
              <div>
                <span>IDEAL BODY</span>
              </div>
              <div>
                <span>
                  In here we will help you to shape and build your ideal body
                  and live your life to fullest
                </span>
              </div>
            </div> 
            {/* figures*/}
            <div className="figures">
              <div>
                <span>+140</span>
                <span>expect coaches</span>
              </div>
              <div>
                <span>+978</span>
                <span>members joined</span>
                </div>
              <div>
                <span>+50</span>
                <span>fitness programs</span>
                </div>
            </div>
            {/*Hero buttons*/}
            <div className="hero-buttons">
              <button className="btn">Get Started</button>
              <button className="btn">Learn More</button>
            </div>
        </div>
        <div className="right-h">
          <button className='btn'>Join Now</button>

          <div className="heart-rate">
            <img className='heart' src={Heart} alt="" />
            <span>Heart Rate </span><span>116 bpm</span>
          </div>

          <img src={HeroImg} alt="" className='hero-image'/>
          <img src={ImageBack} alt="" className='hero-image-back'/>
        </div>

    </div>
  )
}

export default Hero