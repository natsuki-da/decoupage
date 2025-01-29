import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";


export const MenuContainer = styled.div`
  background-color: ${Colors.White};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
  height: 100%;
  img{
   width: 1.5rem;
   color: ${Colors.Letter};
  }
`;
 
export const Menu_Top = styled.div`
  //background-color: ${Colors.Secondary};
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Button = styled.button`
  background-color: ${Colors.White};
  border: none;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 2rem;
`;

export const Menu_Middle = styled.div`
  height: 70%;

`; 

export const MenuLinks = styled.div`
  font-family: ${Fonts.Tangerine};
  font-size: 1.5rem;
  line-height: 4rem;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const MenuLink = styled.a`
  text-decoration: none;
`;

export const LinkName = styled.div`
`;

export const Menu_Bottom = styled.div`
  height: 20%;
  width: 100%;
  img {
  width: 2rem;
  }
`;

export const Title = styled.div`
  font-family: ${Fonts.Tangerine};
  font-size: 3rem;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
