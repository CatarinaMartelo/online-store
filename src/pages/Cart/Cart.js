import { Button, Col, Form, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import {  useDispatch, useSelector } from "react-redux";
import {useState, useEffect} from "react"
import { ShoppingButton } from "../../components/Buttons/shopping-button";




const Cart = () => {

    const dispatch = useDispatch();
  
    const state = useSelector((state) => state.cart);
  
    const [total, setTotal] = useState();
  
    useEffect(() => {
      setTotal(
        state.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
      );
    }, [state]);

  
    

    return (<div className="home">
        <div className="productContainer">
           
           <ListGroup>

        {state.length > 0 ? (
                <>
                {state.map((product) => (
                    <span className="cartitem" key={product.id}>
                    
                    <ListGroupItem key={product.id}>
                        
                        <Row>
                        <Col md={2}>
                  <Image src={product.image} alt={product.name} fluid rounded />
                </Col>
                            <Col md={2}>
                            <span>{product.title}</span>
                            </Col>
                            <Col md={2}>
                            <span>{product.price} €</span>
                            </Col>
                            <Col md={2}>
                            <Form.Control
                    as="select"
                    value={product.qty}
                    onChange={(event) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: product.id,
                          qty: event.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(6).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                            </Col>
                            <Col md={2}>
                                <Button 
                                    type="button"
                                    variant="light"
                                    onClick={() => dispatch({
                                        type: "DELITEM",
                                        payload: product,})}
                                ><AiFillDelete
                                font-size="20px"/></Button>
                            
                  
                </Col>
                        </Row>
                    </ListGroupItem>
                  
                   
                    <div className="cartItemDetail">
                      
                      
                    </div>
                   
                  </span>
                ))}
                </>
                
              ) : (
                <span style={{ padding: 10}}>Cart is empty!</span>
              )}

</ListGroup>

        </div>
        <div className="filters summary">
            <span className="title">Subtotal ({state.length} items)</span>
            <span style={{ fontWeight: 700, fontSize: 20 }}>Total:{total} €</span>
        <Button type="button" disabled={state.length === 0}>
          Proceed to Checkout
        </Button>
        <ShoppingButton className="continueShopping" >
          Continue Shopping
        </ShoppingButton>
        </div>
    </div>
    )
}

export default Cart;