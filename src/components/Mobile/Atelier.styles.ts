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
`;

export const Title = styled.div`
  font-family: ${Fonts.SACRAMENTO};
  font-size: 2rem;
  padding: 2rem 0;
`;

export const Contents = styled.div`
  display: flex;
  width: 100%;
  @media screen and (900px > width){
  flex-direction: column;
  align-items: center;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 12rem;
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
  width: 70%;
  height: 100%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Colors.Letter};
  background-color: ${Colors.SecondaryOpacity};
  @media screen and (900px > width){
  text-align: center;
  width: 85%;
  }
`;

export const Details = styled.div`
  flex: 3;
  font-family: ${Fonts.SHIPPORI_MINCHO};
  font-size: 1rem;
  padding: 1rem 3rem 3rem 3rem;
  height: 100%;
  div {
    padding: 2rem 0;
  }
  span {
    padding: 1rem;
  }
`;

export const ImageBlock = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column-reverse;
  padding: 0 3rem 3rem 0;
  @media screen and (900px > width){
    padding: 0 3rem 3rem 3rem;
  }
`;

export const AtelierPic = styled.img`
  width: 100%;
`;

export const Bottom = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 @media screen and (900px > width){
  height: 100%;
  }
`;

export const BottomContent = styled.div`
  width: 70%;
  height: 100%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Colors.Letter};
  background-color: ${Colors.SecondaryOpacity};
  padding-bottom: 5rem;
  @media screen and (900px > width){
    padding-bottom: 3rem;
    width: 85%;
  }
`;

export const Profile = styled.div`
  flex: 3;
  font-family: ${Fonts.SHIPPORI_MINCHO};
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 1rem 3rem 3rem 3rem;
  height: 100%;
  text-align: center;
  #kaigyo {
  width: 100%;
  height: 1rem;
  }
`;

export const ProfileBottom = styled.div`
  display: flex;
  @media screen and (900px > width){
    flex-direction: column;
    align-items: center;
  };
`;

export const ProfilePic = styled.img`
  width: 30%;
  flex: 1;
  @media screen and (900px > width){
    padding; 0 10%;
    width: 80%;
  }
`;

export const ProfileBottomText = styled.div`
  flex:1;
  font-family: ${Fonts.SHIPPORI_MINCHO};
  font-size: 1rem;
  padding: 2rem 3rem;
  line-height: 2rem;
  span {
   line-height: 5rem;
  }
   @media screen and (900px > width){
     span{
     line-height: 3rem;
     }
     line-height: 1.5rem;
     padding: 2rem 2rem 1rem 2rem;
     text-align: center;
   }
`;