import styled from "styled-components";
import { Colors, Fonts } from "../../../../global/Global.Styles";

export const Container = styled.div`
  width: 100%;
  margin: 3rem 0 0 0;
  @media screen and (width > 900px){
  margin: 6rem 0 0 0;
  }
`;

export const Band = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: ${Colors.Tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (width > 900px){
  height: 5rem;
  }
`;

export const Title = styled.div`
  font-size: 1.5rem;
  line-height: 3rem;
  font-family: ${Fonts.SACRAMENTO};
  color: ${Colors.Letter};
  @media screen and (width > 900px){
  font-size: 2rem;
  line-height: 5rem;
  }
`;

export const Content = styled.div`
   height: 8rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   a { 
   text-decoration: none;
   }
   div:hover {
   font-weight: 700;
   }
   @media screen and (width > 900px){
   height: 10rem;
  }
`;

export const Article = styled.div`
   font-family: ${Fonts.SHIPPORI_MINCHO};
   font-size: 1rem;
   line-height: 1.5rem;
`;

export const Image = styled.div`
  height: 10rem;
  background-image: url("../../images/plate-gd01.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (width > 900px){
  height: 30rem;
  }
  @media screen and (900px > width > 786px){
  height: 20rem;
  }
`;
