import styled from "styled-components";
import { Colors, Fonts } from "../../../global/Global.Styles";

export const Container = styled.div`
  width: 100%;
  height: 30rem;
  background-color: ${Colors.SecondaryOpacity};
  //background-color: rgba(202,130,142, 0.3);
  margin: 6rem 0 0 0;
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 10rem 0
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 20% 0 0;
`;

export const Title = styled.div`
    font-size: 2.5rem;
    font-family: ${Fonts.CAVEAT};
    margin: 3rem 0 2rem 0;
`;

export const Description = styled.div`
    font-size: 1rem;
    font-family: ${Fonts.NOTO_SANS_JP};
`;

export const Image = styled.img`
  height: 25rem;
`;