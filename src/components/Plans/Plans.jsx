import './Plans.css'
import {plansData} from '../../Data/plansData'
import Wtick from '../../img/wtick.png'

const Plans = () => {
  return (
<div className="plans-container" id='plan'>
    <div className="blur plans-blur-1"></div>
    <div className="blur plans-blur-2"></div>

    <div className='plans-header'>
        <span className='stroke-text'>READY TO START </span>
        <span style={{color:"white"}}>YOUR JOURNEY </span>
        <span className='stroke-text'>NOW WITH US</span>
    </div>
    {/*Plans Card*/ }
    <div className="plans">
        {plansData.map((plan)=> (
            <div className="plan" key={1}>
               <img src={plan.icon} alt="" style={{height:"40px", width:"40px", }}/> 
                <span>{plan.name}</span>
                <span>${plan.price}</span>

                <div className="features">
                    {plan.features.map((feature)=>(
                        <div className="feature">
                            <img src={Wtick} alt="" style={{height:"25px", width:"25px"}} />
                            <span>{feature}</span>
                        </div>
                        
                    ))}
                </div>
                <div>
                    <span>See More Benefit -> </span>
                </div>
                <button className="btn">Join Now</button>

            </div>
))}
    </div>
</div>
  )
}

export default Plans