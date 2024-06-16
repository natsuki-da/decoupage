import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

export const Container = styled.div`
  width: 100%;
  height: 50rem;
  position: relative;
  background-color: ${Colors.Tertiary};
  `;
  
export const Image = styled.img`
  width: 100%;
`;

export const Description = styled.div`
top: 0%;
right: 5%;
width: 40%;
height:  100%;
opacity: 70%;
// padding: 2rem;
background-color: ${Colors.Primary};
position: absolute;
`;

export const Content = styled.div`
  margin: 1.5rem;
`;

export const Title = styled.div`
    font-size: 3rem;
    font-family: ${Fonts.CAVEAT};
    padding: 0 0 2rem 0;
  `;
