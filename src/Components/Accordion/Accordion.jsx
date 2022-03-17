import './Accordion.scss'

//Images
import Food from '../../assets/img/food1.jpg'

const Accordion = () =>{
    return(
        <div className="accordion">
            <div className="accordion-page">
                <div className="accordion-box">
                    <div className='accordion-dish'>
                    <button className='accordion-button'><span>+</span>
                      <br /> Add new dishes
                    </button>
                    </div>
                    {
                        Array.from(new Array(11)).map(e =>(
                            <div className="accordion-dish">
                            <img src={Food} alt="" className="accordion-img" />
                            <h3 className="accordion-name">Spicy seasoned seafood noodles</h3>
                            <p className="accordion-text">$ 2.29 * 20 Bowls</p>
                            <button className="accordion-btn">Edit dish</button>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Accordion