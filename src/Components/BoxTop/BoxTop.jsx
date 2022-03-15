import './BoxTop.scss'
import date from '../../utils/functions/date';

//Images
import Icon1 from '../../assets/img/Icon1.png'
import Icon from '../../assets/img/Icon.png'
import Icon2 from '../../assets/img/Icon2.png'
import Frame from '../../assets/img/Frame 68.png'
import Frame1 from '../../assets/img/Frame 69.png'
import Avatar from '../../assets/img/Avatar 1.png'
import Avatar1 from '../../assets/img/Avatar 1 (1).png'
import Avatar2 from '../../assets/img/Avatar 1 (2).png'

const BoxTop = () =>{
    return(
        <div className='boxtop__home'>
            <div className="boxtop__header">
                <div className='boxtop__user'>
                   <h2 className='boxtop__user__name'>Dashboard</h2>
                   <p className='boxtop__user__date'>{date()}</p>
               </div>

               <div className="boxtop__section">
                   <div className="boxtop-page">
                       <div className="boxtop-list">
                           <img src={Icon1} alt="" className="boxtop-pic" />
                           <span className='boxtop-num'>+32.40%</span>
                           <img src={Frame} alt="" className="boxtop-icon" />
                       </div>
                       <h3 className='boxtop-number'>$10,243.00</h3>
                       <p className="boxtop-text">Total Revenue</p>
                   </div>
                   <div className="boxtop-page">
                       <div className="boxtop-list">
                           <img src={Icon} alt="" className="boxtop-pic" />
                           <span className='boxtop-nums'>-12.40%</span>
                           <img src={Frame1} alt="" className="boxtop-icon" />
                       </div>
                       <h3 className='boxtop-number'>23,456</h3>
                       <p className="boxtop-text">Total Dish Ordered</p>
                   </div>
                   <div className="boxtop-page">
                       <div className="boxtop-list">
                           <img src={Icon2} alt="" className="boxtop-pic" />
                           <span className='boxtop-num'>+2.40%</span>
                           <img src={Frame} alt="" className="boxtop-icon" />
                       </div>
                       <h3 className='boxtop-number'>1,234</h3>
                       <p className="boxtop-text">Total Customer</p>
                   </div>
               </div>

                <div className="boxtop-p5">
                <div className="boxtop-aside">
                   <div className="boxtop-weight">
                       <h2 className='boxtop-title'>Order Report </h2>
                       <button className="boxtop-button">Filder Order</button>
                   </div>
                   <div className="boxtop-weights">
                       <h3 className='boxtop-innertext'>Customer</h3>
                       <h3 className='boxtop-innertext'>Menu</h3>
                       <h3 className='boxtop-innertext'>Total Paypent</h3>
                       <h3 className='boxtop-innertexts'>Status</h3>
                   </div>
               </div>

                 <div className="boxtop-body">
                     <div className="boxtop-ticklist">
                        <div className="boxtop-tick">
                            <img src={Avatar} alt="" className="boxtop-pics" />
                            <p className="boxtop-tickname">Eren Jaeger</p>
                        </div>
                        <div className="boxtop-ticket">
                            <p className="boxtop-menu">Spicy seasoned seafood noodles </p> 
                        </div>
                            <p className="boxtop-total">$125</p>
                            <button className="boxtop-btn">Completed</button>
                     </div>
                     <div className="boxtop-ticklist">
                        <div className="boxtop-tick">
                            <img src={Avatar1} alt="" className="boxtop-pics" />
                            <p className="boxtop-tickname">Reiner Braunn</p>
                        </div>
                        <div className="boxtop-ticket">
                            <p className="boxtop-menu">Salted Pasta with mushroom sauce </p> 
                        </div>
                            <p className="boxtop-total">$145</p>
                            <button className="boxtop-btns">Preparing</button>
                     </div>
                     <div className="boxtop-ticklist">
                        <div className="boxtop-tick">
                            <img src={Avatar2} alt="" className="boxtop-pics" />
                            <p className="boxtop-tickname">Levi Ackerman</p>
                        </div>
                        <div className="boxtop-ticket">
                            <p className="boxtop-menu">Beef dumpling in hot and sour soup </p> 
                        </div>
                            <p className="boxtop-total">$105</p>
                            <button className="boxtop-btn">Pending</button>
                     </div>
                     <div className="boxtop-ticklist">
                        <div className="boxtop-tick">
                            <img src={Avatar1} alt="" className="boxtop-pics" />
                            <p className="boxtop-tickname">Historia Reiss</p>
                        </div>
                        <div className="boxtop-ticket">
                            <p className="boxtop-menu">Hot spicy fried rice with omelet </p> 
                        </div>
                            <p className="boxtop-total">$45</p>
                            <button className="boxtop-btn">Completed</button>
                     </div>
                     <div className="boxtop-ticklist">
                        <div className="boxtop-tick">
                            <img src={Avatar} alt="" className="boxtop-pics" />
                            <p className="boxtop-tickname">Hanji Zoe</p>
                        </div>
                        <div className="boxtop-ticket">
                            <p className="boxtop-menu">Hot spicy fried rice with omelet </p> 
                        </div>
                            <p className="boxtop-total">$245</p>
                            <button className="boxtop-btn">Completed</button>
                     </div>
                     <div className="boxtop-ticklist">
                        <div className="boxtop-tick">
                            <img src={Avatar2} alt="" className="boxtop-pics" />
                            <p className="boxtop-tickname">Eren Jaeger</p>
                        </div>
                        <div className="boxtop-ticket">
                            <p className="boxtop-menu">Spicy seasoned seafood noodles </p> 
                        </div>
                            <p className="boxtop-total">$125</p>
                            <button className="boxtop-btn">Completed</button>
                     </div>
                     <div className="boxtop-ticklist">
                        <div className="boxtop-tick">
                            <img src={Avatar1} alt="" className="boxtop-pics" />
                            <p className="boxtop-tickname">Reiner Braunn</p>
                        </div>
                        <div className="boxtop-ticket">
                            <p className="boxtop-menu">Salted Pasta with mushroom sauce </p> 
                        </div>
                            <p className="boxtop-total">$145</p>
                            <button className="boxtop-btns">Preparing</button>
                     </div>
                     <div className="boxtop-ticklist">
                        <div className="boxtop-tick">
                            <img src={Avatar} alt="" className="boxtop-pics" />
                            <p className="boxtop-tickname">Levi Ackerman</p>
                        </div>
                        <div className="boxtop-ticket">
                            <p className="boxtop-menu">Beef dumpling in hot and sour soup </p> 
                        </div>
                            <p className="boxtop-total">$105</p>
                            <button className="boxtop-btn">Pending</button>
                     </div>
                     <div className="boxtop-ticklist">
                        <div className="boxtop-tick">
                            <img src={Avatar1} alt="" className="boxtop-pics" />
                            <p className="boxtop-tickname">Historia Reiss</p>
                        </div>
                        <div className="boxtop-ticket">
                            <p className="boxtop-menu">Hot spicy fried rice with omelet </p> 
                        </div>
                            <p className="boxtop-total">$45</p>
                            <button className="boxtop-btn">Completed</button>
                     </div>
                     <div className="boxtop-ticklist">
                        <div className="boxtop-tick">
                            <img src={Avatar2} alt="" className="boxtop-pics" />
                            <p className="boxtop-tickname">Hanji Zoe</p>
                        </div>
                        <div className="boxtop-ticket">
                            <p className="boxtop-menu">Hot spicy fried rice with omelet </p> 
                        </div>
                            <p className="boxtop-total">$245</p>
                            <button className="boxtop-btn">Completed</button>
                     </div>
                 </div>
                </div>
            </div>
        </div>
    )
}

export default BoxTop;