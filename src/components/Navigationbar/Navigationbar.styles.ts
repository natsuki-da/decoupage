import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

export const Main = styled.div`
  font-family: ${Fonts.ROBOTO};
  padding: 2rem;
  background-color: ${Colors.Primary};
  display: block;
  overflow: hidden;
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: end; 
  position: relativ;
  height: 3rem;
  width: 100%;
  // background-color: ${Colors.Primary};
  `;

export const Button = styled.button`
  background-color: ${Colors.Primary};
  &:hover{
    background-color: ${Colors.White};
  }
`;

export const Image = styled.img`
  width: 1.5rem;
  color: ${Colors.White};
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  font-size: 4rem;
  font-family: ${Fonts.CAVEAT};
  color: ${Colors.Primary};
`;

// export const Container = styled.div`
//   display: flex;
//   justify-content: space-around;
//   padding: 1rem 30%;
// `;

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem 30%;
  // color: ${Colors.White};
  // font-size: 1rem;
  // cursor: pointer;
  // margin: 0 1rem;
`;

export const HeaderLink = styled.div`
  color: ${Colors.Primary};
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  margin: 0 1rem;
  font-family: ${Fonts.CAVEAT};
`;

export const Line = styled.div`
  width: 50%;
  margin: 0 25%;
  height: 1px;
  background-color: ${Colors.Primary};
`;

  // export const Main = styled.div`
  //   display: flex;
  //   flex-direction: center;
  // //   align-items: center;
  // //   justify-content: center;
  //   margin: 0 1rem 0 1rem;
  //   height: 10rem;
  //   justify-content: space-between;
  // //   padding: 1rem 2rem;
  // //   align-items: center;
  //   background-color: ${Colors.Primary};
  // `;

  export const Sidebar = styled.div`
    width: 4rem;
    background-color: ${Colors.Primary};
    overflow: hidden;
    transition: width 0.2s linear;
    &:hover {
      width: 10rem;
    }
  ul{
    padding-left: 1rem;
  }
  li {
    list-style: none;
  } 
  a {
    display: flex;
    flex-direction: row;
    align-items: center;  
  }
  span {
    color: ${Colors.Error};
    font-size: 1rem;
  }
`;
