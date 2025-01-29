import { Glossary } from "../../types/enums";
import * as S from "./LandingPage.styles"

const LandingPage = () => {
    return (
        <S.Container>
            <S.Left>
                <S.Title>{Glossary.Title}</S.Title>
                <S.Subtitle>{Glossary.Subtitle}</S.Subtitle>
            </S.Left>
            <S.Right>
            <S.Image src="../../images/main.JPG" alt="main picture" />
                {/* <S.Image src="../../images/r-pink01.jpeg" alt="main picture" /> */}
            </S.Right>
        </S.Container>

    )
}

export default LandingPage;