import styled from "styled-components";
import { Colors, Fonts } from "../../../global/Global.Styles";

export const Container = styled.div`
width: 100%;
height: 30rem;
background-color: ${Colors.SecondaryOpacity};
margin: 6rem 0;
display: flex;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0 10%;
  @media screen and (1024px > width){
  min-width: 40%; 
  padding: 0 1rem 0 10%;
  }
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
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (1024px > width){
  margin: 0 5rem 0 0;}
`; 

export const Image = styled.img`
height: 24rem;
@media screen and (1024px > width){
height: 50%;
}
`;
