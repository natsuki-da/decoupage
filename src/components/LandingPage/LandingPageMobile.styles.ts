import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

export const Container = styled.div`
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 5rem 0 1rem 0;
`;

  export const Image = styled.img`
    width: 60%;
    left: 25%;
    box-shadow: -2rem -2rem 0px 0 ${Colors.PrimaryLight};
  `;

  export const Title = styled.div`
    font-size: 3rem;
    font-family: ${Fonts.CAVEAT};
    color: ${Colors.Primary};
  `;