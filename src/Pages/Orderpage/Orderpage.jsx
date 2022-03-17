import './Orderpage.scss'
import { Switch, Route } from 'react-router-dom';

import Order from '../../Components/Order/Order';
import Settings from '../../Components/Settings/Settings';

const Orderpage = () =>{
    return(
        <>
        <h3 className='settings'>Settings</h3>
        <div className="orderpage">
            <div className="orderpage_left">
                <Order />
            </div>
            <div className="orderpage_right">
                <Switch>
                    <Route  path="/order/restaurant">
                      <Settings />
                    </Route>
                </Switch>
            </div>
        </div>
        </>
    )
}

export default Orderpage;