import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

// export const Container = styled.div`
//   height: 100vh;
//   display: flex;
//   `;

//   export const Left = styled.div`
//     flex: 3;
//     display: flex;
//     justify-content: center;
//     // background-color: ${Colors.Primary};
//     align-items: center;
//     `;
    
//   export const Title = styled.div`
//     font-size: 4rem;
//     font-family: ${Fonts.CAVEAT};
//     color: ${Colors.Tertiary};
//     overflow: hidden;
//   `;
  
//   export const Right = styled.div`
//     flex: 2;
//   `;

//   export const Background = styled.div`
//     position: relative;
//     top: 20%;
//     left: 7%;
//     background-color: ${Colors.Primary};
//     width: 70%;
//     height: 50%;
//     // margin: 3rem;
//   `;

//   export const Image = styled.img`
//     position: absolute;
//     top: 25%;
//     right: 5%;
//     width:  30%;
//   `;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  `;

  export const Left = styled.div`
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.Primary};
    `;
    
  export const Title = styled.div`
    font-size: 4rem;
    font-family: ${Fonts.CAVEAT};
    color: ${Colors.Secondary};
    overflow: hidden;
  `;
  
  export const Right = styled.div`
    flex: 2;
    background-color: ${Colors.White};
  `;

  export const Background = styled.div`
    position: relative;
    top: 20%;
    left: 7%;
    background-color: ${Colors.Primary};
    border: 0.2rem solid ${Colors.Secondary};
    width: 70%;
    height: 50%;
  `;

  export const Image = styled.img`
    position: absolute;
    top: 25%;
    right: 5%;
    width:  30%;
  `;