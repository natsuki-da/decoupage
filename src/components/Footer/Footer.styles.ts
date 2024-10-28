import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

export const Container = styled.div`
    width: 100%;
    height: 5rem;
    margin: 7rem 0 0 0;
    background-color: ${Colors.Primary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Contents = styled.div`
font-size: 1.5rem;
font-family: ${Fonts.CAVEAT};
color: ${Colors.White};
height: 3rem;
`;

export const Icons = styled.div`
display: flex;
justify-content: center;
align-items: center; 
width: 3.5rem;
 height: 3.5rem;
 //background-color: ${Colors.White};
 border-radius: 50%;
 img {
  width: 2rem;
  display: flex;
  padding: 0 1rem;
 }
`;