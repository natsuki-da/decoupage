import styled from "styled-components";
import { Colors, Fonts } from "../../../global/Global.Styles";

export const Container = styled.div`
  width: 100%;
  height: 50rem;
  position: relative;
  `;
  
export const Image = styled.img`
  width: 100%;
  height: 50rem;
  @media screen and (768px >= width){
  width: 50%;
  height: 50%;
  }
`;

export const Block = styled.div`
  top: 0%;
  right: 5%;
  width: 40%;
  height:  100%;
  opacity: 70%;
  background-color: ${Colors.Primary};
  position: absolute;
`;

export const Content = styled.div`
  margin: 5rem;
`;

export const Title = styled.div`
  font-size: 3rem;
  font-family: ${Fonts.CAVEAT};
  `;

  export const Description = styled.div`
  font-family: ${Fonts.NOTO_SANS_JP};
  font-size: 1rem;
  padding: 4rem 1rem;
  `;