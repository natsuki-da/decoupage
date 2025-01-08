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
                <div>Atelier</div>
                <div>Lessons</div>
            </S.Content>
            <S.Image />
        </S.Container>
    );
};

export default About;