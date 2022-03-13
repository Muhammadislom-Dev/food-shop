import './Home.scss'
import { useState } from 'react';
import {Switch, Route } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/orderFoods';
import HomeTop from '../../Components/HomeTop/HomeTop'
import HomeContent from '../../Components/HomeContent/HomeContent'

// Images
import Delete from '../../assets/img/Button.png'
import Card from '../../assets/img/Card.png'
import Paypal from '../../assets/img/Paypal.png'
import Wallet from '../../assets/img/Wallet.png'


const Home =() =>{

    const [modal, setModal] = useState(false)

    const openModal = (e) =>{
        e.preventDefault()
        setModal(!modal)
    }

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

                <div className="home__right-payme">
                    <button className='home__right-card'  onClick={openModal}>Continue to Payment</button>
                </div>

              
                <dialog open={modal} className='home__right-section'>
                    <h2 className="home__right-names">Payment</h2>
                    <p className="home__right-texts">3 payment method available</p>

                    <hr className='home__right-hr' />
                    
                    <h2 className="section__name">Payment Method</h2>
                    <div className="section__page">
                        <div className="section__payme">
                            <label for="inp1" className='section-label'>
                                <img src={Card} alt="" className="section__pic" />
                               <p className='section-span'>Credit Card</p>
                            </label>

                        </div>
                        <div className="section__payme">
                            <label for="inp1" className='section-label'>
                                <img src={Paypal} alt="" className="section__pic" />
                               <p className='section-span'>Paypal</p>
                            </label>
                        </div>
                        <div className="section__payme">
                            <label for="inp1" className='section-label'>
                               <img src={Wallet} alt="" className="section__pic" />
                               <p className='section-span'>Cash</p>
                            </label>
                        </div>
                    </div>

                    <div className="section-inp">
                        <p className='section-inp-name' for="name">Cardholder Name</p>
                        <input className='section-input' type="name" id='name' />
                    </div>
                    <div className="section-inp">
                        <p className='section-inp-name' for="name">Card Number</p>
                        <input className='section-input' type="number" id='number' />
                    </div>

                    <div className="section__page">
                        <div className="section-cards">
                            <p  className='section-inp-name' for="number">Expiration Date</p>
                            <input className='section-inputs' type="number" id='number' />
                        </div>
                        <div className="section-cards">
                            <p  className='section-inp-name' for="password">CVV</p>
                            <input className='section-inputs' type="password" id='password' />
                        </div>
                    </div>

                    <div className="section__top">
                        <div className='section-home'>
                        <p className='section-inp-name'>Order Type</p>
                        <div className='section-sel'>
                        <select className='section-select' >
                            <option>To Go</option>
                            <option>Delivery</option>
                        </select>
                        </div>
                        </div>
                        <div className="section-cards">
                            <p  className='section-inp-name' for="number">Table no.</p>
                            <input className='section-inputs' type="number" id='number' />
                        </div>
                    </div>

                   <div className="section__tops">
                   <button className="section__btn" onClick ={() => setModal(!modal)}>
                        Cancel
                    </button>
                    <button  className='section__button'>Confirm payment</button>
                   </div>
                </dialog>
            </div>
        </div>
    )
}
export default Home;