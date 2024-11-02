import * as S from "./AboutSchoolMobile.styles"

const AboutSchoolMobile = () => {
    return (
        <S.Container>
            <S.Left>
                <S.Image src="../../images/tote-bl01.jpeg" alt="welcome-plate" className="welcome" />
            </S.Left>
            <S.Right>
                <S.Title>About School</S.Title>
                <S.Description>デコパージュサロンについて…</S.Description>
            </S.Right>
        </S.Container>
    )
}

export default AboutSchoolMobile;