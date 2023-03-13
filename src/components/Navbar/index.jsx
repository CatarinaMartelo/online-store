import { Button, Dropdown } from "react-bootstrap";
import Badge from "react-bootstrap/esm/Badge";
import { Link, useLocation } from "react-router-dom";
import { Container, Logo, NavbarLogo, Navigation, NavOption, Title, NavLabel, SearchBar} from "./styles";
import { FaShoppingCart } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {

  
  const location = useLocation();

  const navList = [
    {
      name: "↝ Products ↜",
      path: "/products",
    },
  ];

  const dispatch = useDispatch();

  const state = useSelector((state)=> state.cart)

  return (
    <Container>
      <Link to="/">
      <NavbarLogo>
        <Logo src={require("../../assets/logo.png")} alt="Logo" />
      <Title>Online Store</Title>
      </NavbarLogo>
      </Link>
      {<Navigation>
        {navList.map((item) => (
          <NavOption key={item.name} to={item.path}>
          <NavLabel active={location.pathname === item.path}>
          {item.name}
        </NavLabel>
      </NavOption>
 
        ))}

      </Navigation>}
  
      
      <Dropdown>
            <Dropdown.Toggle variant="success">
            <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{state.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>

              {state.length > 0 ? (
                <>
                {state.map((product) => (
                  <span className="cartitem" key={product.id}>
                    <img src={product.image}
                    className="cartItemImg"
                    alt={product.name}/>
                    <div className="cartItemDetail">
                      <span>{product.title}</span>
                      <span>{product.price} €</span>
                    </div>
                    <AiFillDelete
                    fontSize="20px"
                    style={{cursor: "pointer"}}
                  onClick={() => dispatch({
                    type: "DELITEM",
                    payload: product,})}/>
                  </span>
                ))}
                <Link to="/cart">
                <Button style={{ width: "95%", margin: "0 10px" }}>
                  Go To Cart
                </Button>
              </Link>
              </>
              ) : (
                <span style={{ padding: 10}}>Cart is empty!</span>
              )}


                   
            </Dropdown.Menu>
          </Dropdown>
      
      

    </Container>
  );
};


export default Navbar