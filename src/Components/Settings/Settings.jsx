import './Settings.scss'
import { Link } from 'react-router-dom'

const Settings = () =>{

    const handleAddClass = (evt) =>{
        const links = document.querySelectorAll('.setting__linkactive');
        links.forEach(link =>{
         link.classList.remove('setting__linkactive')
        })
        evt.currentTarget.classList.add('setting__linkactive')
      }
    

    return(
        <div className="setting">
            <div className="setting-page">
                <div className="setting-box">
                    <h2 className='setting-name'>Products Management</h2>
                    <button className="setting-button">Manage Categories</button>
                </div>

                <ul className='setting-links'>
                   <li className='setting__item'>
                       <Link onClick={handleAddClass} className='setting__link'    to="/order" >Hot Dishes</Link>
                   </li>
                   <li className='setting__item'>
                       <Link onClick={handleAddClass} className='setting__link'   to="order/restaurant/cold/">Cold Dishes</Link>
                   </li>
                   <li className='setting__item'>
                       <Link onClick={handleAddClass} className='setting__link'   to="/order/soup/">Soup</Link>
                   </li>
                   <li className='setting__item'>
                       <Link onClick={handleAddClass} className='setting__link'   to="/order/grill/">Grill</Link>
                   </li>
                   <li className='setting__item'>
                       <Link onClick={handleAddClass} className='setting__link'   to="/order/appetizer/">Appetizer</Link>
                   </li>
                   <li className='setting__item'>
                       <Link onClick={handleAddClass} className='setting__link'   to="/order/dessert/">Dessert</Link>
                   </li>
               </ul>
            </div>
        </div>
    )
}
export default Settings