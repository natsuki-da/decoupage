import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

export const Container = styled.div`
  width: 50%;
  height: 40rem;
  margin: 6rem auto;
  background-color: ${Colors.SecondaryOpacity};
  display: flex;
  position: relative;
  @media screen and (1024px > width){
  width: 70%;
  height: 25rem;
  } 
`;

export const Content = styled.div`
  position: absolute;
  height: 70%;
  width: 70%;
  left: 15%;
  top: 15%;
  overflow-y: auto;
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
  `;

  export const BlogTitle = styled.div`
  font-family: ${Fonts.NOTO_SANS_JP};
  font-size: 1rem;
  line-height: 2rem;
  padding: 0 1rem;
  `;