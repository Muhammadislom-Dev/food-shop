import './Home.scss'

import HomeTop from '../../Components/HomeTop/HomeTop'

const Home =() =>{
    return(
        <div className='home'>
            <div className='home__left'>
                <div>
                    <HomeTop />
                </div>
                <div>Home context</div>
            </div>
            <div className='home__right'>Right</div>
        </div>
    )
}
export default Home