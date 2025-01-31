import styled from "styled-components";
import { Colors, Fonts } from "../../../global/Global.Styles";

export const Container = styled.div`
width: 100%;
height: 30rem;
background-color: ${Colors.SecondaryOpacity};
margin: 6rem 0;
display: flex;
align-items: center;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 10%;
  height: 26rem;
`;

export const Title = styled.div`
    font-size: 2.5rem;
    font-family: ${Fonts.SACRAMENTO};
    margin: 1rem 0 1.25rem 0;
    height: 20%;
`;

export const Description = styled.div`
    font-size: 1rem;
    font-family: ${Fonts.SHIPPORI_MINCHO};
    height: 70%;
    #kaigyo {
     width: 100%;
     height: 1.5rem;
    }
     @media screen and (960px > width > 768px){
     overflow-y: auto;
     }
`;

export const ButtonContainer = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

  export const Button = styled.div`
    width: 10rem;
    height: 3rem;
    border-radius: 0.5rem;
    background-color: ${Colors.Primary};
    color: ${Colors.White};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    font-family: ${Fonts.SACRAMENTO};
    font-size: 1.25rem;
    a {
    text-decoration: none;
    cursor: point;
    }
  `;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 30rem;
  @media screen and (1024px > width){
  margin: 0 5rem 0 0;
  }
`;

export const Image = styled.img`
  width: 80%;
`;
