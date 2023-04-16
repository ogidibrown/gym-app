import Header from '../Header/Header'
import './Hero.css'
import HeroImg from '../../img/hero.png'
import Heart from '../../img/heart.png'
import ImageBack from '../../img/hero-img-back.png'
import Calories from '../../img/calories.png'
import {motion} from 'framer-motion'



const Hero = () => {

  const transition = {type:"spring", duration: 4};
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
        <div className="left-h">
          <div className="blur hero-blur"></div>
            <Header/>
            {/* The best ad*/}
            <div className="the-best-ad">
              <motion.div initial={{left: mobile ? "178px" :"238px" }} whileInView={{left:'8px'}} transition={{...transition,type:'tween'}} > </motion.div>
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

          <motion.div className="heart-rate" initial={{right:'-1rem'}} whileInView={{right:'4rem'}} transition={transition} >
            <img className='heart' src={Heart} alt="" />
            <span>Heart Rate </span><span>116 bpm</span>
          </motion.div>

          <img src={HeroImg} alt="" className='hero-image'/>
          <motion.img initial={{right:'0.1rem'}} whileInView={{right:'4rem'}} transition={transition} src={ImageBack} alt="" className='hero-image-back'/>
          <motion.div className="calories" initial={{right:'37rem'}} whileInView={{right:'28rem'}} transition={transition}>
            <img src={Calories} alt="" className='calimg'/>
            <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero