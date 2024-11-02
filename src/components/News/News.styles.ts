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
  //background-color: ${Colors.White};
  position: absolute;
  height: 70%;
  width: 70%;
  left: 15%;
  top: 15%;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-family: ${Fonts.CAVEAT};
  `;

  export const Description = styled.div`
  font-family: ${Fonts.NOTO_SANS_JP};
  font-size: 1rem;
  padding: 3rem 1rem;
  `;