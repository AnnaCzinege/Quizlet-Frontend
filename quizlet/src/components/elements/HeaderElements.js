import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.div`
  background-color: #008080;
  /* #306be2 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  z-index: 5;
  font-family: "Raleway-Medium";
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #306be2;
  &:hover {
    color: #f6a100;
  }
`;

export const StyledButton = styled.button`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: whitesmoke;
  border: solid;
  border-color: #008080;
  &:hover {
    color: #f6a100;
    background: white;
    border-color: #ffecc2;
    border-radius: 25px;
  }
  display: block;
  justify-content: space-around;
  background: transparent;

  cursor: pointer;
  &:active {
    outline: none;
  }
  padding: 15px;
  box-sizing: border-box;
`;

export const ToggleBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
    background: #333;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1rem;
`;

export const LogoContainer = styled.div`
  padding: 5px;
  margin-top: 5px;
  align-content: center;
`;

export const Logo = styled.img`
  /* resize!!! */
  align-content: center;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Li = styled.li`
  padding: 0 1rem;
`;

export const MenuContainer = styled.div`
  @media (max-width: 617px) {
    display: none;
  }
`;

export const SearchBar = styled.input`
  width: 250%;
  height: 30px;
  padding-left: 5px;
  background: white;
  border-radius: 25px;
  border: 2px solid #f1f3f4;
  @media (max-width: 925px) {
    max-width: 185px;
  }
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.img`
  float: left;
`;

export const SearchBox = styled.form`
  position: relative;
  display: inline-block;
  margin-left: 1.5rem;
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const TopicButton = styled.button`
  color: whitesmoke;
  font-family: "Raleway-Medium";
  font-size: bold;
  border-radius: 25px;
  padding: 20px;
  font-size: 20px;
  background: transparent;
  border: none;
  text-decoration: underline;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #f6a100;
  }
  cursor: pointer;
`;
