import './HomeTop.scss'
import { NavLink } from 'react-router-dom';

import date from '../../utils/functions/date';


const HomeTop =() =>{
    return(
       <div className='home-top'>
           <div className='home-top__header'>
               <div className='user'>
                   <h2 className='user__name'>Muhammadislom Dev</h2>
                   <p className='user__date'>{date()}</p>
               </div>
               <form className='form'>
                   <input className='form__input' type="search" placeholder='Search for food, coffe, etc..' />
               </form>
           </div>
           <div>
               <ul className='nested-links'>
                   <li className='nested-link__item'>
                       <NavLink className='nested-links__link'  activeClassName='nested-links__link-active' exact to="/" >Hot Dishes</NavLink>
                   </li>
                   <li className='nested-link__item'>
                       <NavLink className='nested-links__link' activeClassName='nested-links__link-active'  to="/cold">Cold Dishes</NavLink>
                   </li>
                   <li className='nested-link__item'>
                       <NavLink className='nested-links__link' activeClassName='nested-links__link-active'  to="/soup">Soup</NavLink>
                   </li>
                   <li className='nested-link__item'>
                       <NavLink className='nested-links__link' activeClassName='nested-links__link-active'  to="/grill">Grill</NavLink>
                   </li>
                   <li className='nested-link__item'>
                       <NavLink className='nested-links__link' activeClassName='nested-links__link-active'  to="/appetizer">Appetizer</NavLink>
                   </li>
                   <li className='nested-link__item'>
                       <NavLink className='nested-links__link' activeClassName='nested-links__link-active'  to="/dessert">Dessert</NavLink>
                   </li>
               </ul>
           </div>
       </div>
    )
}
export default HomeTop;