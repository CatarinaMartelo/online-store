import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background-color: #000000
`;

export const NavbarLogo = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
`;

export const Logo = styled.img`
  width: 60px;
`;

export const Title = styled.div`
font-size: 40px;
color: #ffffff;
padding-left: 20px;
font-weight: bold;
text-decoration: none;
font-family: 'Satisfy', cursive;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-right: 400px;
`;

export const NavOption = styled(Link)`
  text-decoration: none;
  padding: 0 15px;
  color: #ffffff;
  font-size: 16px;
  align-items: end;
`;

type NavLabelProps = {
  active: boolean;
};

export const NavLabel = styled.span<NavLabelProps>`
`;

export const CartIcon = styled.img`
  width: 30px;
`;


export const SearchBar = styled.input`
width: 200px;
margin-left: 40px;
`

export const NavbarRight = styled.div`
`