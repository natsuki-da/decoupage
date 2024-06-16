import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

export const Container = styled.div`
width: 100%;
padding: 5rem 0 1.5rem 0;
display: flex;
`;

export const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: ${Colors.Primary};
`;

export const LeftContainer = styled.div`
  position: absolute;
  right: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
`;

export const Title = styled.div`
    font-size: 2.5rem;
    font-family: ${Fonts.CAVEAT};
    margin: 2rem 0;
`;

export const Description = styled.div`
    font-size: 1rem;
    font-family: ${Fonts.NOTO_SANS_JP};
`;

export const Right = styled.div`
flex: 2;
display: flex;
width: 100%;
height: 20rem;
`;

export const Image = styled.img`
  
`;