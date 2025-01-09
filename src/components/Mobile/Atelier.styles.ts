import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
//   background-color: ${Colors.Tertiary};
  width: 100%;
  height: 100%;
  background-image: url("../../images/bg_white.JPG");
  background-size: cover;
`;

export const Navbar = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${Colors.Secondary};
  opacity: 50%;
`;

export const Header = styled.div`
  width: 100%;
  height: 12rem;
`;

export const Image = styled.div`
  width: 100%;
  height: 12rem;
  background-image: url("../../images/welcome.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Top = styled.div`
 width: 100%;
 height: 30rem;
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: ${Colors.Tertiary};
 padding: 3rem 0;
`;

export const Title = styled.div`
  font-family: ${Fonts.SACRAMENTO};
  font-size: 1.5rem;
`;

export const Bottom = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 100%;
 height: 30rem;
`;