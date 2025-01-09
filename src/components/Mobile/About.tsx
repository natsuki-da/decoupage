import { Paths } from "../../types/enums";
import * as S from "./About.styles"

const About = () => {

    return (
        <S.Container>
            <S.Band>
                <S.Title>
                    About
                </S.Title>
            </S.Band>
            <S.Content>
                <a href={Paths.ABOUT_ATELIER}>
                    <S.Article>Atelier</S.Article>
                </a>
                <S.Article>Lessons</S.Article>
            </S.Content>
            <S.Image />
        </S.Container>
    );
};

export default About;