import styled from "styled-components";
import { Colors, Fonts } from "../../../global/Global.Styles";

export const Container = styled.div`
    width: 100%;
    background-color: ${Colors.SecondaryOpacity};
    margin: 1rem 0;
    display: flex;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 1rem 0 1rem 1rem;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`;

export const Title = styled.div`
    font-size: 1rem;
    font-family: ${Fonts.CAVEAT};
    margin: 0 0 1rem 0;
`;

export const Description = styled.div`
    font-size: 0.5rem;
    font-family: ${Fonts.NOTO_SANS_JP};
`;