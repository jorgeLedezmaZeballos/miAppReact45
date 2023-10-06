import "./Card.css";
import { Link } from "react-router-dom";

function Card(props){
    
    return (
        <div className = "Card" >
            <Link to = {props.title}><h2>{props.title}</h2></Link>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;