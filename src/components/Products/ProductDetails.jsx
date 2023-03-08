import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../../redux/actions/productsActions";
import {RxCross1} from "react-icons/rx"
import { Button } from "../cross-button";
import { addCart } from "../../redux/actions/cartActions";

const ProductDetails = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();
    console.log(product);
    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
            console.log("Err: ", err);
            });
        dispatch(selectedProduct(response.data));
    };


    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail(productId);
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);


    const addProduct = (product) => {
        dispatch(addCart(product))
        
    }

    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div className="ui active centered inline loader"></div>
            ) : (
                <div className="ui placeholder segment">
                      <Button></Button>
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                       

                            <div className="column lp">
                                <img className="ui fluid image" src={image} alt="ProductImage"/>
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <p className="ui teal tag label">{price}€</p>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0" onClick={() => addProduct(product)}>
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
            }


export default ProductDetails