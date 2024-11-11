import styled from "styled-components";
import { Colors, Fonts } from "../../../global/Global.Styles";

export const Container = styled.div`
  width: 100%;
  height: 50rem;
  position: relative;
  background-image: url("../../images/welcome02.JPG");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (1024px > width){
  height: 40rem;
  }
  `;

export const Block = styled.div`
  top: 0%;
  right: 5%;
  width: 40%;
  height:  100%;
  //opacity: 70%;
  background-color: ${Colors.SecondaryOpacity};
  position: absolute;
  @media screen and (1024px > width){
  width: 65%;
  }
`;

export const Content = styled.div`
  margin: 5rem;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-family: ${Fonts.CAVEAT};
  `;

  export const Description = styled.div`
  font-family: ${Fonts.NOTO_SANS_JP};
  font-size: 1rem;
  padding: 4rem 1rem;
  `;