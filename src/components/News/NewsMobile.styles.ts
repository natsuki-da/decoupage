import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

export const Container = styled.div`
  width: 80%;
  height: 20rem;
  margin: 1rem auto;
  background-color: ${Colors.SecondaryOpacity};
  display: flex;
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  height: 80%;
  width: 80%;
  left: 10%;
  top: 7%;
  overflow-y: auto;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-family: ${Fonts.CAVEAT};
  line-height: 5rem;
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
   color: ${Colors.Primary};
   font-weight: 900;
   }
  `;

  export const BlogTitle = styled.div`
  font-family: ${Fonts.NOTO_SANS_JP};
  font-size: 1rem;
  line-height: 2rem;
  padding: 0 1rem;
  `;