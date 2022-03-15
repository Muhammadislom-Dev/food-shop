import './Notification.scss'

import BoxTop from '../../Components/BoxTop/BoxTop';
import SublimeRight from '../../Components/SublimeRight/SublimeRight';

const Notification = () =>{
    return(
        <div className="notification">
            <div className='notification__left'>
                <BoxTop />
            </div>
            <div className='notification__right'>
                <SublimeRight />
            </div>
        </div>
    )
}

export default Notification;