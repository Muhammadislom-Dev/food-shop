import { Link} from 'react-router-dom'
import './Sidebar.scss'
import Logo from '../../assets/img/Logo.png'
import Home from '../../assets/img/Home.png'

const Sidebar =() =>{

   const handleAddClass = (evt) =>{
     const links = document.querySelectorAll('.sidebar__link-active');
     links.forEach(link =>{
      link.classList.remove('sidebar__link-active')
     })
     evt.currentTarget.classList.add('sidebar__link-active')
   }
    return(
        <div className='sidebar'>
          <Link className='logo' to="/"> <img src={Logo} alt="" className="sidebar__pic" /> </Link>
             <ul className='sidebar__list'>
                 <li className='sidebar__item'>
                    <Link className='sidebar__link'
                     onClick={handleAddClass} to="/" > 
                        <span className='sidebar__link-item '>
                        <img src={Home} alt="" className="sidebar__pic" /></span> 
                    </Link>
                 </li>
                 <li className='sidebar__item'>
                    <Link className='sidebar__link'  
                    onClick={handleAddClass}  to="/discount"> 
                        <span className='sidebar__link-item '>
                        <img src={Home} alt="" className="sidebar__pic" /></span> 
                    </Link>
                 </li>
                 <li className='sidebar__item'>
                    <Link className='sidebar__link' 
                    onClick={handleAddClass} to="/notification" > 
                        <span className='sidebar__link-item'>
                        <img src={Home} alt="" className="sidebar__pic" /></span> 
                    </Link>
                 </li>
                 <li className='sidebar__item'>
                    <Link  className='sidebar__link' 
                    onClick={handleAddClass} to="/graph"> 
                        <span className='sidebar__link-item'>
                        <img src={Home} alt="" className="sidebar__pic" /></span> 
                    </Link >
                 </li>
                 <li className='sidebar__item'>
                    <Link className='sidebar__link' 
                    onClick={handleAddClass} to="/order" > 
                        <span className='sidebar__link-item'>
                        <img src={Home} alt="" className="sidebar__pic" /></span> 
                    </Link>
                 </li>
                 <li className='sidebar__item'>
                    <Link className='sidebar__link' 
                    onClick={handleAddClass} to="/settings" > 
                        <span className='sidebar__link-item'>
                        <img src={Home} alt="" className="sidebar__pic" /></span> 
                    </Link>
                 </li>
             </ul>
        </div>
    )
}

export default Sidebar