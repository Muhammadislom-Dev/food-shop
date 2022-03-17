import './Order.scss'
import { Link } from 'react-router-dom'


//Images
import Icon from '../../assets/img/Appereance.png'

const Order = () =>{

    const handleAddClass = (evt) =>{
        const links = document.querySelectorAll('.order__link-active');
        links.forEach(link =>{
         link.classList.remove('order__link-active')
        })
        evt.currentTarget.classList.add('order__link-active')
      }

    return(
        <div className="order">
            <div className="order_page">
                <div className="order-list">
                    <Link onClick={handleAddClass} className='order__link' exact to="/order/">
                        <img src={Icon} alt="" className="order-icon" />
                        <div className="order-item">
                            <h3 className='order-name'>Appereance</h3>
                            <p  className='order-text'>Dark and Light mode, Font size</p>
                        </div>
                    </Link>
                    <Link onClick={handleAddClass} className='order__link'  to="/order/restaurant" >
                        <img src={Icon} alt="" className="order-icon" />
                        <div className="order-item">
                            <h3 className='order-name'>Your Restaurant</h3>
                            <p className='order-text'>Dark and Light mode, Font size</p>
                        </div>
                    </Link>
                    <Link onClick={handleAddClass} className='order__link' to="/order/managment">
                        <img src={Icon} alt="" className="order-icon" />
                        <div className="order-item">
                            <h3 className='order-name'>Products Management</h3>
                            <p className='order-text'>Manage your product, pricing, etc</p>
                        </div>
                    </Link>
                    <Link onClick={handleAddClass} className='order__link' to="/order/notification">
                        <img src={Icon} alt="" className="order-icon" />
                        <div className="order-item">
                            <h3 className='order-name'>Notifications</h3>
                            <p className='order-text'>Customize your notifications</p>
                        </div>
                    </Link>
                    <Link onClick={handleAddClass} className='order__link' to="/order/security">
                        <img src={Icon} alt="" className="order-icon" />
                        <div className="order-item">
                            <h3 className='order-name'>Security</h3>
                            <p className='order-text'>Configure Password, PIN, etc</p>
                        </div>
                    </Link>
                    <Link onClick={handleAddClass} className='order__link' to="/order/security">
                        <img src={Icon} alt="" className="order-icon" />
                        <div className="order-item">
                            <h3 className='order-name'>About Us</h3>
                            <p className='order-text'>Find out more about Posly</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Order