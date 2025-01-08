import styled from "styled-components";
import { Colors, Fonts } from "../../../global/Global.Styles";

export const Container = styled.div`
  width: 100%;
  margin: 3rem 0 0 0;
`;

export const Band = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${Colors.Tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-family: ${Fonts.CAVEAT};
  color: ${Colors.Letter};
`;

export const Content = styled.div`
   font-family: ${Fonts.NOTO_SANS_JP};
   font-size: 1rem;
   height: 7rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   //background-color: ${Colors.Error};
`;

export const Image = styled.div`
  //width: 100vw;
  height: 10rem;
  background-image: url("../../images/plate-gd01.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
`;
