import { Glossary, Paths } from "../../types/enums";
import * as S from "./About.styles"

const About = () => {

    return (
        <S.Container>
            <S.Band>
                <S.Title>
                    {Glossary.About}
                </S.Title>
            </S.Band>
            <S.Content>
                <a href={Paths.ABOUT_ATELIER}>
                    <S.Article>{Glossary.Atelier}</S.Article>
                </a>
                <a href={Paths.Lessons}>
                    <S.Article>{Glossary.Lessons}</S.Article>
                </a>
            </S.Content>
            <S.Image />
        </S.Container>
    );
};

export default About;