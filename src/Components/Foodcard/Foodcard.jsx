import './Foodcard.scss'

const Foodcard = ({img, title, price, available, onClick}) => {
    return(
        <li onClick={onClick}>
            <img src={img} 
            alt="food pic"
            width="200"
            height="200" 
            />
            <h3>{title}</h3>
            <span> {price} $ </span>
            <span> {available} Bowls available </span>
        </li>
    )
}
export default Foodcard;