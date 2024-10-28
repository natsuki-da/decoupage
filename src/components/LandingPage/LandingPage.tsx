import * as S from "./LandingPage.styles"


const LandingPage = () => {
    return (
        <S.Container>
            <S.Left>
                <S.Title>Atelier Rin</S.Title>
            </S.Left>
            <S.Right>
                <S.Background />
                <S.Image src="../../images/main.JPG" alt="main picture" className="main" />
            </S.Right>
        </S.Container>

    )
}

export default LandingPage;