import styled from "styled-components";
import { Colors } from "../../global/Global.Styles";

export const Container = styled.div`
  width: 100%;
  height: 25rem;
  margin: 0 0 2rem 0;
  padding: 1rem 0 0 0;
  //background-color: ${Colors.Secondary};
  display: flex;
  justify-content: center;
`;

export const SlidesContainer = styled.div`
  width: 80%;
  //background-color: ${Colors.Primary};
  display: flex:
  align-items: center;
`;

export const Image = styled.img`
  width: 20rem;
  height: 20rem;
  margin:0 auto;
  z-index: 1;
`;

export const BtnContainer = styled.div`
  width: 10%;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Btn = styled.div`
  display: flex;
  align-items: center;
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


  // .slick-prev:before, 
  // .slick-next:before {
  //   color: ${Colors.Primary};
  //   font-size: 3rem;
  //   opacity: 1;
  //   width: 5rem;
  // }
  // .slick-prev {
  //   left: 1rem;
  //   z-index: 2;
  // }
  // .slick-next{
  //   right: 1.5rem;
  //   z-index: 2;
  // }
  // .slick-prev:hover:before,
  // .slick-next:hover:before {
  //    color: ${Colors.Tertiary};
  // }