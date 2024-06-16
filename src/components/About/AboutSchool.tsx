import * as S from "./AboutSchool.styles"

const AboutSchool = () => {
    return (
        <S.Container>
            <S.Left>
                <S.Image src="../../images/welcome.jpeg" alt="welcome-plate" className="welcome" />
            </S.Left>
            <S.Right>
                <S.RightContainer>
                    <S.Title>About School</S.Title>
                    <S.Description>Here is about school</S.Description>
                </S.RightContainer>
            </S.Right>
        </S.Container>
    )
}

export default AboutSchool;