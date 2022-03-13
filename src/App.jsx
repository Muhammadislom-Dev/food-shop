import './App.scss'
import { Switch, Route } from 'react-router';

//Pages
import Home from './Pages/Home/Home';
import Notification from './Pages/Notification/Notification';

//Component
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
       <Sidebar />
       <div className='App__content'>
         <Switch> 
            <Route path="/discount" exact  >
             /discount
            </Route>
            <Route path="/notification" exact >
               <Notification />
            </Route>
            <Route path="/graph"exact >
               /graph 
            </Route>
            <Route path="/order"exact >
               /order 
            </Route>
            <Route path="/settings" exact >
               /settings
            </Route>
            <Route path="/" >
               <Home />  
            </Route>
         </Switch>
       </div>
    </div>
  );
}

export default App;
