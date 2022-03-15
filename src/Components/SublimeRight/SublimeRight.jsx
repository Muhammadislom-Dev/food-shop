import './SublimeRight.scss'

//Images
import Food1 from '../../assets/img/food1.jpg'
import Food2 from '../../assets/img/food2.jpg'
import Food3 from '../../assets/img/food3.jpg'

const SublimeRight = () => {
    return(
        <div className='sublime'>
           <div className="sublime-box">
           <div className="sublime__page">
                <h3 className='sublime-name'>Most Ordered</h3>
                <select className='sublime-select'>
                    <option>Today</option>
                    <option>Yesterday</option>
                </select>
            </div>

            <div className="sublime-list">
                <img className='sublime-img' src={Food1} alt="" />
                <div className="sublime-item">
                    <h3 className='sublime-names'>Spicy seasoned seafood noodles</h3>
                    <p className="sublime-text">200 dishes ordered</p>
                </div>
            </div>
            <div className="sublime-list">
                <img className='sublime-img' src={Food2} alt="" />
                <div className="sublime-item">
                    <h3 className='sublime-names'>Salted pasta with mushroom sauce</h3>
                    <p className="sublime-text">120 dishes ordered</p>
                </div>
            </div>
            <div className="sublime-list">
                <img className='sublime-img' src={Food3} alt="" />
                <div className="sublime-item">
                    <h3 className='sublime-names'>Beef dumpling in hot and sour soup</h3>
                    <p className="sublime-text">80 dishes ordered</p>
                </div>
            </div>

            <div className="sublime-button">
                <button className="sublime-btn">View All</button>
            </div>
           </div>
        </div>
    )
}
export default SublimeRight