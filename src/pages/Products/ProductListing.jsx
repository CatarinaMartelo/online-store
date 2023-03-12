
import { useEffect, useState } from 'react'
import ProductComponent from './ProductComponent';
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import { Button } from 'react-bootstrap';

const ProductListing = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
      }

    return (
        <div>
        <div className='categories'>
        <Button onClick={() => handleCategoryChange(null)}>All</Button>
        <Button onClick={() => handleCategoryChange("men's clothing")}>Men's Clothing</Button>
        <Button onClick={() => handleCategoryChange("jewelery")}>Jewelery</Button>
        <Button onClick={() => handleCategoryChange("electronics")}>Electronics</Button>
        <Button onClick={() => handleCategoryChange("women's clothing")}>Women's Clothing</Button>
      </div>
        <div className="ui grid container">
     
        <ProductComponent category={selectedCategory} />
      </div>
      </div>
    )
}

export default ProductListing