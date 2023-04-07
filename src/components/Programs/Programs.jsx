import './Programs.css'
import { programData } from '../../Data/programData'
import RightArrow from '../../img/right-arrow.png'
const Programs = () => {
  return (
   <div className="Programs" id='programs'>
    {/*Programs Header*/}
    <div className="programs-header">
        <span className='stroke-text'>Explore Our</span>
        <span>Programs</span>
        <span className='stroke-text'>To Shape You</span>
    </div>
    <div className="program-categories">
            {programData.map((program)=>(
                <div className="category">
                   <img src={program.image} alt="" className='prog-img'/>
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" className="arrow-img" />
                    </div>
                </div>
            ))}
        </div>
   </div>
  )
}

export default Programs