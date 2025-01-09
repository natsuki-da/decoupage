import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

export const Container = styled.div`
  width: 100%;
  margin: 3rem 0 0 0;
`;

export const Band = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: ${Colors.Tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  line-height: 3rem;
  font-family: ${Fonts.SACRAMENTO};
  color: ${Colors.Letter};
  font-weight: 
`;

export const Content = styled.div`
   height: 8rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   a { a {
   text-decoration: none;
   }
   text-decoration: none;
   }
   div:hover {
   font-weight: 700;
   }
`;

export const Article = styled.div`
  //  font-family: ${Fonts.NOTO_SANS_JP};
  font-family: ${Fonts.SHIPPORI_MINCHO};
   font-size: 1rem;
   line-height: 1.5rem;
`;

export const Image = styled.div`
  //width: 100vw;
  height: 10rem;
  background-image: url("../../images/plate-gd01.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
`;
