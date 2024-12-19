import styled from "styled-components";
import { Colors } from "../../global/Global.Styles";

export const Container = styled.div`
  width: 100%;
  height: 20rem;
  padding: 4rem 0 0 0;
  display: flex;
  justify-content: center;
`;

export const SlidesContainer = styled.div`
  width: 80%;
  display: flex:
  align-items: center;
`;

export const Image = styled.img`
  width: 20rem;
  height: 20rem;
  margin:0 auto;
  z-index: 1;
  line-height: 0;
  @media screen and (768px > width){
  width: 15rem;
  height: 15rem;
  } 
`;

export const BtnContainer = styled.div`
  width: 10%;
  height: 20rem;
  display: flex;
  align-items: center;
  @media and screen (768px > width){
    height: 15rem;
  }
`;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  img{
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${Colors.Primary};
  }
  img: hover{
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${Colors.Tertiary};
  }
  button {
  border: none;
  background-color: transparent;
  }
`;