import { Link } from "react-router-dom";
import { Glossary, Paths } from "../../../../types/enums";
import * as S from "./About.styles"
import { useMediaQuery } from "react-responsive";

const About = () => {
    const isDesktop: boolean = useMediaQuery({ query: `(min-width: 768px)` })
    return (
        <S.Container>
            <S.Band>
                <S.Title>
                    {Glossary.About}
                </S.Title>
            </S.Band>
            <S.Content>
                {!isDesktop && (
                    <>
                        <S.Article><Link to={Paths.ABOUT_ATELIER}>{Glossary.Atelier}</Link></S.Article>
                        <S.Article><Link to={Paths.Lessons}>{Glossary.Lessons}</Link></S.Article>
                    </>
                )}
                {isDesktop && (
                    <>
                        <S.Article><Link to={Paths.Lessons}>{Glossary.Lessons}</Link></S.Article>
                    </>
                )
                }
            </S.Content>
            <S.Image />
        </S.Container>
    );
};

export default About;