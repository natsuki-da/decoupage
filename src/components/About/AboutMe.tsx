import * as S from "./AboutMe.styles"

const AboutMe = () => {
    return (
        <S.Container>
            <S.Left>
                <S.LeftContainer>
                    <S.Title>About Me</S.Title>
                    <S.Description>Hello, i am Ryoko</S.Description>
                </S.LeftContainer>
            </S.Left>
            <S.Right>
                <S.Image src="../../images/welcome.jpeg" alt="welcome-plate" className="welcome" />
            </S.Right>
        </S.Container>
    )
}

export default AboutMe;