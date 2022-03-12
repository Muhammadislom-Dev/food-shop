import './Home.scss'
import {Switch, Route } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/orderFoods';

import HomeTop from '../../Components/HomeTop/HomeTop'
import HomeContent from '../../Components/HomeContent/HomeContent'

import Delete from '../../assets/img/delete.jpg'


const Home =() =>{
    const {orderFoods, setOrderFoods} = useContext(Context)
    return(
        <div className='home'>
            <div className='home__left'>
                <div>
                    <HomeTop  />
                    <div className='home__middle'>
                        <h2 className='home__middle-title'>Choose Dishes</h2>
                        <select className='home__middle-select' >
                            <option>Dine Out</option>
                            <option>Night Out</option>
                        </select>
                    </div>
                </div>
                  <Switch>
                      
                      <Route path="/:dishtype" >
                          <HomeContent  />
                      </Route>
                      <Route path="/" >
                          <HomeContent />
                      </Route>
                  </Switch>
            </div>
            <div className='home__right'>
                <h3 className='home__right-title'>Orders #34562</h3>
                <div className="home__right-box">
                    <div className="home__right-pages">
                        <a href="#" className='home__right-link'>Dine In</a>
                    </div>
                    <div className="home__right-top">
                        <a href="#" className='home__right-links'>Dine In</a>
                    </div>
                    <div className="home__right-top">
                        <a href="#" className='home__right-links'>Dine In</a>
                    </div>
                </div>

                <div className='home__right-sublime'>
                    <p className="home__right-text">Item</p>
                    <div className='home__right-sublimes' >
                    <p className="home__right-text">Qty</p>
                    <p className="home__right-text">Price</p>
                    </div>
                </div>

               { orderFoods.length > 0 && ( 
               <ul className='home__right-list'>
                    {orderFoods.map(food => (
                        <li key={food.id}>
                            <div className='home__right-page' > 
                              <p className='home__right-strong'> {food.title}</p> 
                              <p className='home__right-numbers'>{food.number}</p>  {' '}
                              <p className='home__right-number'>$ {food.price * food.number} </p>
                            </div>
                            <div className='home__right-button' >
                                <input className='home__right-input' type="text" placeholder='Please, just a little bit spicy only.' />
                            <button className='home__right-btn' onClick={() =>{
                                setOrderFoods(orderFoods.filter(ovqat => ovqat.id !== food.id))
                            }}>
                              <img className='home__right-img' src={Delete} alt="Delete button" />
                            </button>
                            </div>
                        </li>
                    ))}
                </ul>
               )}
            </div>
        </div>
    )
}
export default Home