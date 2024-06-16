import * as S from "./AboutDecoupage.styles"

const AboutDecoupage = () => {
    return (
        <S.Container>
            <S.Image src="../../images/welcome02.JPG" alt="welcome-plate" className="welcome" />
            <S.Description>
                <S.Content>
                    <S.Title>About Decoupage</S.Title>
                    <div>Decoupage is to...</div>
                </S.Content>
            </S.Description>
        </S.Container>
    )
}

export default AboutDecoupage;