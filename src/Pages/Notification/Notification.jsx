import './Notification.scss'

import BoxTop from '../../Components/BoxTop/BoxTop';

const Notification = () =>{
    return(
        <div className="notification">
            <div className='notification__left'>
                <BoxTop />
            </div>
            <div className='notification__right'>
                <h1>Hello world</h1>
            </div>
        </div>
    )
}

export default Notification;