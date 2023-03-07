import {useNavigate} from "react-router-dom"
import { Button } from "react-bootstrap";




export const ShoppingButton = () => {
    const navigate = useNavigate();

    const navigateToProducts = () => {
        navigate("/products")}
    
        return (
            <Button type="button" onClick={navigateToProducts}>
          Continue Shopping
        </Button>
        )
    }