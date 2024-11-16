import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

export const Container = styled.div`
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 3rem 0;
`;

  export const Image = styled.img`
    width: 60%;
    left: 25%;
    box-shadow: -3rem -3rem 0px 0 ${Colors.Primary};
  `;

  export const Title = styled.div`
    font-size: 3rem;
    font-family: ${Fonts.CAVEAT};
    color: ${Colors.PrimaryLight};
  `;