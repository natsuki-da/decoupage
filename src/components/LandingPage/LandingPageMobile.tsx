import * as S from "./LandingPageMobile.styles";

const LandingPageMobile = () => {
    return (
        <S.Container>
            <S.Image src="../../images/main.JPG" alt="main picture" />
            <S.TitleBlock>
                <S.Title>Atelier Rin</S.Title>
                <S.Subtitle>- Decoupage Salon in Nara -</S.Subtitle>
            </S.TitleBlock>
            <S.Description>
                Atelier Rinへようこそ。<br />
                奈良市にあるデコパージュ教室です。<br />
                デコパージュをとおして、暮らしに彩りを。<br />
            </S.Description>
        </S.Container>
    )
}

export default LandingPageMobile;