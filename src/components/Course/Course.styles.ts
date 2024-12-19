import styled from "styled-components";
import { Colors } from "../../global/Global.Styles";

export const Container = styled.div`  
width: 100%;
height: 100vh;
margin: 6rem 0;
display: flex;
justify-content: center;
background-color: ${Colors.Tertiary};
`;

export const SlidesContainer = styled.div`
  width: 80%;
  height: 100%;
`;

export const BtnContainer = styled.div`
  width: 10%;
  height: 100%;
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
  background-color: ${Colors.PrimaryLight};
  }
  button {
  border: none;
  background-color: transparent;
  }
`;


















































// export const Container = styled.div`  
// padding: 0 5%;
// background-color: ${Colors.TertiaryOpacity};
// margin: 6rem 0;

//   .slick-prev:before,
//   .slick-next:before {
//     color: ${Colors.Secondary};
//     font-size: 3rem;
//     opacity: 1;
//   }
//   .slick-prev {
//     left: 1rem;
//     z-index: 2;
//   }
//   .slick-next{
//     right: 2rem;
//     z-index: 2;
//   }
//   .slick-prev:hover:before,
//   .slick-next:hover:before {
//      color: ${Colors.White};
//   }
// `;