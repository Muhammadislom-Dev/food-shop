import './Home.scss'
import {Switch, Route } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/orderFoods';

import HomeTop from '../../Components/HomeTop/HomeTop'
import HomeContent from '../../Components/HomeContent/HomeContent'


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
                      
                      <Route path="/:dishtype">
                          <HomeContent />
                      </Route>
                      <Route path="/">
                          <HomeContent />
                      </Route>
                  </Switch>
            </div>
            <div className='home__right'>
               { orderFoods.length > 0 && ( 
               <ul>
                    {orderFoods.map(food => (
                        <li key={food.id}>
                            <strong>{food.title}</strong> 
                            <em>{food.number}</em>  {' '}
                            <button onClick={() =>{
                                setOrderFoods(orderFoods.filter(ovqat => ovqat.id !== food.id))
                            }}>
                                &times;
                            </button>
                            <em>$ {food.price * food.number} </em>
                        </li>
                    ))}
                </ul>
               )}
            </div>
        </div>
    )
}
export default Home