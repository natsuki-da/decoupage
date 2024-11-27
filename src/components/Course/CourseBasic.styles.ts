import styled from "styled-components"
import { Fonts, Colors } from "../../global/Global.Styles";

export const Container = styled.div`
  display: flex;
  height: 100vh;
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
`;

export const Description = styled.div`
  position: absolute;
  right: 5%;
  left: 5%;
  width: 90%;
  height: 80%;
  overflow-y: auto;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-family: ${Fonts.CAVEAT};
  margin: 2rem 0;
`;

export const Lesson = styled.div`
  font-size: 1rem;
  font-family: ${Fonts.NOTO_SANS_JP};
  .lesson {
    font-size: 1rem;
    font-family: ${Fonts.NOTO_SANS_JP};
    line-height: 2rem;
  }
  .asterisk {
  padding: 1rem 0 0 0;
  line-height: 2rem;
  }
  ul{
  background-color: ${Colors.TertiaryOpacity};
  margin-top: 2rem;
  }

`;

export const Subtitle = styled.div`
  padding: 1.25rem 0;
`;