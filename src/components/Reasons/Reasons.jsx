import './Reasons.css';
import Gym1 from '../../img/gym1.jpg'
import Gym2 from '../../img/gym2.jpg'
import Gym3 from '../../img/gym3.jpg'
import Gym4 from '../../img/gym4.jpg'
import Tick from '../../img/tick.png'


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
            
                <img src={Tick} alt=""className='tick'></img>
               <span></span>
          
                <img src={Tick} alt=""className='tick' />
               <span></span>
           
            
                <img src={Tick} alt="" className='tick'/>
                <span></span>
            
            
                <img src={Tick} alt="" className='tick'/>
                <span></span>
            
        </div>  
    </div>
  </div>   
  )
}

export default Reasons