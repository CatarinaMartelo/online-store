import {useNavigate} from "react-router-dom"
import {RxCross1} from "react-icons/rx"



export const Button = () => {
    const navigate = useNavigate();

    const navigateToProducts = () => {
        navigate("/products")}
    
        return (
            <button className="ui circular icon button" onClick={navigateToProducts}><RxCross1/></button>
        )
    }