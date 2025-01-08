import styled from "styled-components";
import { Colors, Fonts } from "../../../global/Global.Styles";

export const Container = styled.div`
 width: 100%;
 height: 20rem;
 position: relative;
 background-image: url("../../images/welcome02.JPG"); 
 background-size: cover;
 background-repeat: no-repeat;
 margin: 4rem 0 0 0;
`;

export const Block = styled.div`
  right: 5%;
  position: absolute;
  width:  90%;
  height: 100%;
  opacity: 70%;
  background-color: ${Colors.SecondaryOpacity};
`;

export const Content = styled.div`
  padding: 2rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-family: ${Fonts.CAVEAT};
  `;

  export const Description = styled.div`
    font-family: ${Fonts.NOTO_SANS_JP};
    font-size: 1rem;
    padding: 1rem;
  `;