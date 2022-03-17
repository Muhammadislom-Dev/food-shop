import './Settings.scss'
import { NavLink } from 'react-router-dom'

import Accordion from '../../Components/Accordion/Accordion'
import { Switch, Route } from 'react-router-dom'

const Settings = () =>{  

    return(
        <div className="setting">
            <div className="setting-page">
                <div className="setting-box">
                    <h2 className='setting-name'>Products Management</h2>
                    <button className="setting-button">Manage Categories</button>
                </div>

                <ul className='setting-links'>
                   <li className='setting__item'>
                       <NavLink  className='setting__link' exact  to="/order/restaurant/" >Hot Dishes</NavLink>
                   </li>
                   <li className='setting__item'>
                       <NavLink  className='setting__link' exact to="/order/restaurant/cold">Cold Dishes</NavLink>
                   </li>
                   <li className='setting__item'>
                       <NavLink  className='setting__link'  to="/order/restaurant/soup">Soup</NavLink>
                   </li>
                   <li className='setting__item'>
                       <NavLink  className='setting__link'  to="/order/restaurant/grill">Grill</NavLink>
                   </li>
                   <li className='setting__item'>
                       <NavLink  className='setting__link'  to="/order/restaurant/appetizer">Appetizer</NavLink>
                   </li>
                   <li className='setting__item'>
                       <NavLink  className='setting__link'  to="/order/restaurant/dessert">Dessert</NavLink>
                   </li>
               </ul>

               <Switch>
                   <Route>
                       <Accordion />
                   </Route>
               </Switch>
            </div>
        </div>
    )
}
export default Settings