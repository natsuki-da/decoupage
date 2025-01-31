import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

export const Container = styled.div`
  width: 50%;
  height: 40rem;
  margin: 2rem auto;
  display: flex;
  position: relative;
  background-color: ${Colors.PrimaryLight};
  @media screen and (1024px > width){
    height: 25rem;
  } 
`;

export const Content = styled.div`
  position: absolute;
  height: 100;
  width: 100%;
  left: 15%;
  top: 15%;
  overflow-y: auto;
  @media screen and (1024px > width){
  left: 0;
  top: 0;
  } 
`;

export const Title = styled.div`
  font-size: 1.5rem;
  line-height: 5rem;
  font-family: ${Fonts.CAVEAT};
  `;

  export const Description = styled.div`
  font-family: ${Fonts.NOTO_SANS_JP};
  font-size: 1rem;
  padding: 0 1rem;
  `;

  export const Blog = styled.div`
   padding: 3rem 0 0 0;
   a {
   text-decoration: none;
   color: #000000;
   }
   a:hover {
   color: #000000;
  //  color: ${Colors.Primary};
   font-weight: 900;
   }
  `;

  export const BlogTitle = styled.div`
  font-family: ${Fonts.NOTO_SANS_JP};
  font-size: 1rem;
  line-height: 2rem;
  padding: 0 1rem;
  
  `;