import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

export const Container = styled.div`
  width: 80%;
  height: 25rem;
  margin: 4rem auto;
  @media screen and (768px > width){
   margin: 1rem auto;
  }
  background-color: ${Colors.SecondaryOpacity};
  display: flex;
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  height: 80%;
  width: 90%;
  left: 10%;
  top: 7%;
  overflow-y: hidden;
`;

export const Title = styled.div`
  // font-size: 1.5rem;
  font-size: 1.25rem;
  font-family: ${Fonts.SACRAMENTO};
  line-height: 3.5rem;
  `;

  export const Description = styled.div`
  font-family: ${Fonts.SHIPPORI_MINCHO};
  // font-size: 1rem;
  font-size: 0.9rem;
  padding: 0 1rem;
  `;

  export const Blog = styled.div`
   padding: 2rem 0 0 0;
   a {
   text-decoration: none;
   }
   a:hover {
   color: ${Colors.Letter};
   font-weight: 900;
   }
  `;

  export const BlogTitle = styled.div`
  font-family: ${Fonts.SHIPPORI_MINCHO};
  font-size: 0.9rem;
  line-height: 2rem;
  padding: 0 1rem;
  `;