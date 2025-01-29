import { Glossary } from "../../types/enums";
import * as S from "./LandingPageMobile.styles";

const LandingPageMobile = () => {
    return (
        <S.Container>
            <S.Image src="../../images/main.JPG" alt="main picture" />
            <S.TitleBlock>
                <S.Title>{Glossary.Title}</S.Title>
                <S.Subtitle>{Glossary.Subtitle}</S.Subtitle>
            </S.TitleBlock>
            <S.Description>
                Atelier Rinへようこそ。<br />
                奈良市にあるデコパージュ教室です。<br />
                デコパージュをとおして、<br />
                暮らしに彩りを。<br />
            </S.Description>
        </S.Container>
    )
}

export default LandingPageMobile;