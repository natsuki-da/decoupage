import styled from "styled-components";
import { Colors } from "../../global/Global.Styles";

export const Container = styled.div`  
padding: 0 5%;
background-color: ${Colors.TertiaryOpacity};
margin: 6rem 0;

  .slick-prev:before,
  .slick-next:before {
    color: ${Colors.Secondary};
    font-size: 3rem;
    opacity: 1;
  }
  .slick-prev {
    left: 1rem;
    z-index: 2;
  }
  .slick-next{
    right: 2rem;
    z-index: 2;
  }
  .slick-prev:hover:before,
  .slick-next:hover:before {
     color: ${Colors.White};
  }
  
`;