import styled from "styled-components";
import { Colors } from "../../global/Global.Styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media screen and (768px > width){
  margin: 5rem 0 0 0;}
`;

export const SlidesContainer = styled.div`
  width: 70%;
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
  width: 15%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (768px > width){
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
  @media screen and (768px > width){
    width: 2.25rem;
    height: 2.25rem;
    }
  }
  img: hover{
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${Colors.Tertiary};
   @media screen and (768px > width){
    width: 2.25rem;
    height: 2.25rem;
    }
  }
  button {
  border: none;
  background-color: transparent;
  }
`;