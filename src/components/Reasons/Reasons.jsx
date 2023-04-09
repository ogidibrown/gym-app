import './Reasons.css';
import Gym1 from '../../img/gym1.jpg'
import Gym2 from '../../img/gym2.jpg'
import Gym3 from '../../img/gym3.jpg'
import Gym4 from '../../img/gym4.jpg'
import Tick from '../../img/tick.png'
import Adidas from '../../img/adidas.png'
import Nike from '../../img/nike.png'



const Reasons = () => {
  return (
  <div className="Reasons" id='reasons'>
    <div className="left-r">
       <img src={Gym1} alt="" />
       <img src={Gym2} alt="" />
       <img src={Gym3} alt="" />
       <img src={Gym4} alt="" /> 
    </div> 
    <div className="right-r">
        <span>Some Reasons</span>
        <div>
            <span className='stroke-text'>Why</span>
            <span> Choose Us?</span>
        </div>
        <div className='details-r'>
            <div>
                <img src={Tick} alt="" />
               <span>OVER 140+ EXPERT COACHES</span>
            </div>
            <div>
                <img src={Tick} alt="" />
               <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div>
                <img src={Tick} alt="" />
                <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            
            <div>
                <img src={Tick} alt="" />
                <span>RELIABLE PARTNERS</span>
            </div>
            
        </div>  
        <span style={{color:'var(--gray)', fontWeight:"normal", paddingLeft:"2px"}}>
          OUR PARTNERS
        </span>
        <div className='partners'>
          <img src={Adidas} alt="" style={{width:"140px", height:"90px"}}/>
          <img src={Nike} alt="" style={{ width:"140px", height:"90px"}}/>
          <img src="" alt="" />
        </div>
    </div>
  </div>   
  )
}

export default Reasons