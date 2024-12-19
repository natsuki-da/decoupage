import styled from "styled-components"
import { Fonts, Colors } from "../../global/Global.Styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
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
overflow-y: auto;
`;

export const Description = styled.div`
  padding: 0 1rem;
  span{
    font-size: 1rem;
    font-family: ${Fonts.NOTO_SANS_JP}; 
  }
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

export const Down = styled.div`
  display: flex;
  justify-content: center;
  height: 20rem;
  padding: 1.5rem 0;
`;

export const Image = styled.img`
  height: 20rem;
`;