import './BoxTop.scss'
import date from '../../utils/functions/date';

const BoxTop = () =>{
    return(
        <div className='boxtop__home'>
            <div className="boxtop__header">
                <div className='boxtop__user'>
                   <h2 className='boxtop__user__name'>Dashboard</h2>
                   <p className='boxtop__user__date'>{date()}</p>
               </div>
            </div>
        </div>
    )
}

export default BoxTop;