import styled from "styled-components"
import { Fonts, Colors } from "../../global/Global.Styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 3rem 0 0 0;
  height: 40rem;
  //background-color: ${Colors.Primary};
`;

export const Up = styled.div`
  height: 5rem;
  div {
    font-size: 1.5rem;
    font-family: ${Fonts.CAVEAT};
    margin: 2rem 0;
  }
`;

export const Middle = styled.div`
height: 20rem;
`;

export const Description = styled.div`
  padding: 0 1rem;
  span{
    font-size: 1rem;
    font-family: ${Fonts.NOTO_SANS_JP}; 
  }
`;

export const Down = styled.div`
  display: flex;
  justify-content: center;
  height: 15rem;
`;

export const Image = styled.img`
  width: 50%;
`;