import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.Styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url("../../images/bg_white.JPG");
  background-repeat: no-repeat repeat;
  background-size: cover;
  padding-bottom: 5rem;
  .icon {
  padding: 0 0.25rem;
  height: 1rem;
  vertical-align: middle;
  }
`;

export const Top = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-bottom: 5rem;
 @media screen and (900px > width){
  height: 100%;
  }
`;

export const TopContent = styled.div`
  width: 30%;
  height: 100%;
  background-color: ${Colors.TertiaryOpacity};
  padding: 2rem 5rem;
  font-family: ${Fonts.SHIPPORI_MINCHO};
  font-size: 1rem;
  line-height: 2rem;
  .dashed_line {
    border-bottom: 1px dashed;
    width: 100%;
  }
  @media screen and (900px > width){
  width: 70%;
  padding: 2rem;
  }
`;

export const Title = styled.div`
  font-family: ${Fonts.Tangerine};
  font-size: 2rem;
  padding: 2rem 0;
`;

export const ScheduleDetail = styled.div`
  line-height: 1.5rem;
  padding: 2rem 0;
`;

export const Bottom = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
`;

export const Lesson = styled.div`
 width: 50%;
 height: 100%;
//  background-color: ${Colors.TertiaryOpacity};
 background-color: ${Colors.SecondaryOpacity};
 padding: 2rem;
 display: flex;
 margin-bottom: 5rem;
 @media screen and (900px > width){
  width: 70%;
  flex-direction: column;
  align-items: center;
 }
`;

export const LessonPlan = styled.div`
 font-family: ${Fonts.SHIPPORI_MINCHO};
 font-size: 1rem;
 line-height: 2rem;
 flex: 3;
 margin-right: 2rem;
 @media screen and (900px > width){
  flex: 1;
  margin-right: 0;
 }
`;

export const LessonName = styled.div`
  font-family: ${Fonts.SACRAMENTO};
  font-size: 1.5rem;
  padding-bottom: 1rem;
  span {
   font-family: ${Fonts.SHIPPORI_MINCHO};
   font-size: 1rem;
  }
`;

export const LessonContent = styled.div`
 font-size: 0.9rem;
 line-height: 1.5rem;
`;

export const LessonFee = styled.div`
 width: 90%;
 padding: 0.25rem;
 margin: 0.5rem 0;
 border-radius: 0.25rem;
background-color: ${Colors.PrimaryLight};
// background-color: ${Colors.TertiaryOpacity};
@media screen and (900px > width){
 width: 100%;
}
`;

export const LessonDetail = styled.div`
 width: 90%;
 padding: 0.25rem;
 margin: 0.5rem 0;
 border-radius: 0.25rem;
//  background-color: ${Colors.PrimaryLight};
 background-color: ${Colors.TertiaryOpacity};
 @media screen and (900px > width){
 width: 100%;
}
`;

export const ImageBlock = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //background-color: ${Colors.Primary};
 @media screen and (900px > width){
  flex: 1;
}
`;

export const LessonImage = styled.img`
  width: 80%;
  @media screen and (900px > width){
  margin-top: 1rem;
  width: 90%;
  }
`;

export const LessonBasicPlan = styled.div`
 font-family: ${Fonts.SHIPPORI_MINCHO};
 font-size: 1rem;
 line-height: 2rem;
 display: flex;
 flex-direction: column;
`;

export const LessonTop = styled.div`
  padding-bottom: 1rem;
`;

export const LessonMiddle = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 1rem;
  div {
  width: 46%;
  };
  @media screen and (900px > width){
   flex-direction: column;
   div{
   width: 100%; 
   };
  }
`;

export const LessonBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20rem;
  width: 100%;
  //background-color: ${Colors.Primary};
`;

export const SlideContainer = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Slides = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scroll-snap-align: start;
  scrollbar-width: none;
  scrollbar-button: 
`;

export const SlideImage = styled.img`
  width: 30%;
  padding: 0 1rem;
  scroll-snap-align: start;
  @media screen and (900px > width){
   width: 90%;
  };
`;

export const ScrollbarContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  a {
  color: ${Colors.Letter};
  margin: 0 1rem;
  font-family: ${Fonts.Tangerine};
  font-size: 2rem;
  text-decoration: none;
  @media screen and (900px > width){
   margin: 0 0.5rem;
  };
  }
  a: hover {
  font-size: 2.5rem;
  }
`;

export const SlideButtonContainer = styled.div`
  width: 7%;
  height: 100%;
  background-color: ${Colors.Tertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SlideButton = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  img{
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background-color: ${Colors.Primary};
  }
  img: hover{
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background-color: ${Colors.Tertiary};
  }
  button {
  border: none;
  background-color: transparent;
  }
`;
