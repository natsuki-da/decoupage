import * as S from "./AboutDecoupageMobile.styles"

const AboutDecoupageMobile = () => {
    return (
    <S.Container>
        <S.Block>
         <S.Content>
             <S.Title>About Decoupage</S.Title>
             <S.Description>デコパージュとは...</S.Description>
         </S.Content>
        </S.Block>
        <S.Image src="../../images/welcome02.JPG" alt="welcome-plate" className="welcome" />
    </S.Container>
    )
}

export default AboutDecoupageMobile;