import styled from "styled-components";
import { Colors, Fonts } from "../../../global/Global.Styles";

export const Container = styled.div`
  width: 100%;
  height: 50rem;
  margin: 6rem 0 0 0;
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
  background-color: ${Colors.SecondaryOpacity};
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  @media screen and (1024px > width){
  width: 65%;
  }
`;

export const Content = styled.div`
  margin: 5rem;
  height: 90%;
  overflow-y: hidden;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-family: ${Fonts.SACRAMENTO};
  `;

  export const Description = styled.div`
  font-family: ${Fonts.SHIPPORI_MINCHO};
  font-size: 1rem;
  line-height: 2.5rem;
  padding: 4rem 1rem;
  &:hover {
   background-color: ${Colors.Secondary};
  }
  `;