import styled from "styled-components";
import { Colors, Fonts } from "../../../global/Global.Styles";

export const Container = styled.div`
 width: 100%;
 height: 20rem;
 position: relative;
 background-image: url("../../images/welcome02.JPG"); 
 background-size: cover;
 background-repeat: no-repeat;
 margin: 4rem 0 0 0;
`;

export const Block = styled.div`
  right: 5%;
  position: absolute;
  width:  90%;
  height: 100%;
  opacity: 70%;
  background-color: ${Colors.Secondary};
`;

export const Content = styled.div`
  padding: 2rem;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-family: ${Fonts.SACRAMENTO};
  `;

  export const Description = styled.div`
    font-family: ${Fonts.SHIPPORI_MINCHO};
    // font-size: 1rem;
    font-size: 0.9rem;
    padding: 1rem;
  `;