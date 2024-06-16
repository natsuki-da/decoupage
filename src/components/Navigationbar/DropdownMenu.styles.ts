import styled from "styled-components";
import { Colors } from "../../global/Global.Styles";

export const DropdownMenu = styled.div<{ $isVisible: boolean }>`
  // display: ${(props) => (props.$isVisible ? "block" : "none")};
  display: ${(props) => (props.$isVisible ? "block" : "none")};
  position: absolute;
  width: 10rem;
  height: 10rem;
  background-color: ${Colors.Error};
  margin: 3rem 0 0 0;
  overflow: hidden;
  transition: width 1s, height 1s, transform 1s;
  &:hover {
    width: 20rem;
    height: 25rem;
  }
  ul{
    padding: 2rem 0 0 3rem;
  }
  li {
    list-style: none;
  } 
`;