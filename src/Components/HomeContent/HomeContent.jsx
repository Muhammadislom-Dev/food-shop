import'./HomeContent.scss'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import foods from '../../assets/data/food'

import { Context } from '../../context/orderFoods'

import Foodcard from '../Foodcard/Foodcard'

const HomeContent = () =>{
    const  {dishtype} = useParams();
    const { orderFoods, setOrderFoods} = useContext(Context)

    return (
    <div className='home-content'>
        <ul className='home-content__list'>
           {foods.
           filter((food) => {
               if(dishtype){
                return food.type === dishtype
               }

               return food.type === 'hot-dishes';
           })
           .map((food) =>(
              <Foodcard
               key={food.id}
               img={food.img} 
               title={food.title}  
               price={food.price}  
               available={food.available}  
               onClick={(e) => {
               const foundFood = foods.find(
                   (ovqat) => ovqat.id === food.id )


                   foundFood.number = foundFood.number ? foundFood.number + 1 
                   : 1 ;
                   
                   
                   const uniqueArr = [
                       ...new Set ([...orderFoods, foundFood])
                    ]
                    
                    setOrderFoods(uniqueArr);
            }}   
            />
           ))}
        </ul>
       
    </div>
    )
    
}

export default HomeContent