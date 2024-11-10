import styled from "styled-components"
import { Fonts, Colors } from "../../global/Global.Styles";

export const Container = styled.div`
  display: flex;
  padding: 0 5%;
`;

export const Left = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  margin: 0 auto;
  right: 5%;
  left: 5%;
  width: 90%;
`;

export const Right = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;  
  // background-color: ${Colors.Primary};
`;

export const Description = styled.div`
  position: absolute;
  right: 5%;
  left: 5%;
  width: 90%;
  height: 80%;
  div {
    font-size: 2.5rem;
    font-family: ${Fonts.CAVEAT};
    margin: 2rem 0;
  }
  span{
    font-size: 1rem;
    font-family: ${Fonts.NOTO_SANS_JP}; 
  }
`;