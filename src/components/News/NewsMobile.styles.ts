import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

export const Container = styled.div`
  width: 80%;
  height: 20rem;
  margin: 1rem auto;
  background-color: ${Colors.SecondaryOpacity};
  display: flex;
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  height: 80%;
  width: 80%;
  left: 10%;
  top: 7%;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-family: ${Fonts.CAVEAT};
  `;

  export const Description = styled.div`
  font-family: ${Fonts.NOTO_SANS_JP};
  font-size: 1rem;
  padding: 1.5rem 0.5rem;
  `;