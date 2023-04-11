import { useState } from 'react'
import { testimonialsData } from '../../Data/testimonialsData'
import './Testimonials.css'
import LeftArrow from '../../img/left-arrow.png'
import RightArrow from '../../img/right-arrow.png'


const Testimonials = () => {
const [select, setSelect] = useState(0);
const tLength = testimonialsData.length;



  return (
    <div className="testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <span>
                {testimonialsData[select].review}
            </span>
            <span>
                <span style={{color:"var(--orange)"}}>
                {testimonialsData[select].name}
                </span>{""}
                - {testimonialsData[select].status}
            </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[select].image} alt="" />
            <div className="arrows">
                <img 
                onClick={()=>{
                    select===0
                    ? setSelect(tLength - 1)
                    : setSelect ((prev)=>prev - 1);

                }}
                src={LeftArrow} alt="" style={{width:"35px", height:"35px", cursor:"pointer"}}/>
                <img 
                onClick={()=>{
                    select ===tLength-1
                    ? setSelect(0)
                    :setSelect ((prev)=> prev+1)
                }}
                src={RightArrow} alt="" style={{width:"35px", height:"35px", cursor:"pointer"}}/>

            </div>
        </div>

    </div>
  )
}

export default Testimonials