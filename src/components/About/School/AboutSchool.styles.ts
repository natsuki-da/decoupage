import styled from "styled-components";
import { Colors, Fonts } from "../../../global/Global.Styles";

export const Container = styled.div`
  width: 100%;
  height: 30rem;
  background-color: ${Colors.SecondaryOpacity};
  margin: 6rem 0 0 0;
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (1024px > width){
  padding: 0 2rem 0 2rem;
  }
`;

export const Image = styled.img`
  height: 24rem;
  @media screen and (1024px > width){
  width: 100%;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 20% 0 0;
`;

export const Title = styled.div`
    font-size: 2.5rem;
    font-family: ${Fonts.SACRAMENTO};
    margin: 2.5rem 0 1.5rem 0;
`;

export const Description = styled.div`
    font-size: 1rem;
    font-family: ${Fonts.SHIPPORI_MINCHO};
    overflow-y: auto;
    height: 25rem;
    margin: 0 0 2rem 0;
    #kaigyo {
     width: 100%;
     height: 1rem;
    }
     div {
    padding: 2rem 0;
  }
  span {
    padding: 1rem;
  }
`;