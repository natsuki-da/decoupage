import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

export const Container = styled.div`
  // height: 30rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 5rem 0 1rem 0;
  //background-color: ${Colors.Tertiary}
`;

  export const Image = styled.img`
    width: 60%;
    left: 25%;
    box-shadow: -2rem -2rem 0px 0 ${Colors.PrimaryLight};
  `;

  export const TitleBlock = styled.div`
    //background-color: ${Colors.Error};

  `;

  export const Title = styled.div`
    font-size: 3rem;
    // font-family: ${Fonts.CAVEAT};
    font-family: ${Fonts.Tangerine};
    color: ${Colors.Primary};
    font-weight: 700;
  `;

  export const Subtitle = styled.div`
    font-size: 1.25rem;
    font-family: ${Fonts.SACRAMENTO};
    color: ${Colors.Primary};
  `;

  export const Description = styled.div`
    font-size: 1rem;
    font-family: ${Fonts.SHIPPORI_MINCHO};
    color: ${Colors.Letter};
    text-align: center;
    padding: 2rem 0 0 0;
    width: 80%;
  `;