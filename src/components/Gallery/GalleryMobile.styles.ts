import styled from "styled-components";

import { Colors } from "../../global/Global.Styles";

export const Container = styled.div`
  height: 25rem;
  // padding: 0 3rem 3rem 3rem;
  padding: 0 3rem;
  margin: 6rem 0 0 0;

  .slick-prev:before, 
  .slick-next:before {
    color: ${Colors.Primary};
    font-size: 3rem;
    opacity: 1;
    width: 5rem;
  }
  .slick-prev {
    left: -1.5rem;
    z-index: 2;
  }
  .slick-next{
    right: -0.1rem;
    z-index: 2;
  }
  .slick-prev:hover:before,
  .slick-next:hover:before {
     color: ${Colors.Tertiary};
  }
`;

export const Image = styled.img`
  width: 20rem;
  height: 20rem;
  margin:0 auto;
  z-index: 1;
`;