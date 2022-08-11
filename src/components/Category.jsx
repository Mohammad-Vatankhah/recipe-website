import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <Icons>
        <NavStyle to={"/Cuisine/Italian"}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </NavStyle>
        <NavStyle to={"/Cuisine/American"}>
          <FaHamburger />
          <h4>American</h4>
        </NavStyle>
        <NavStyle to={"/Cuisine/Thai"}>
          <GiNoodles />
          <h4>Thai</h4>
        </NavStyle>
        <NavStyle to={"/Cuisine/European"}>
          <GiChopsticks />
          <h4>European</h4>
        </NavStyle>
      </Icons>
    </div>
  );
};

const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const NavStyle = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active{
    background: linear-gradient(to right, #f27121, #e94057)
  }
`;

export default Category;
