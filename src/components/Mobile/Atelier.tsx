import * as S from "./Atelier.styles"

const Atelier = () => {
    return (
        <S.Container>
            <S.Navbar>Navbar</S.Navbar>
            {/* <S.Header>
                <S.Image />           
            </S.Header> */}
            <S.Top>
                <S.Title>Atelier Rin</S.Title>
            </S.Top>
            <S.Bottom>
                <S.Title>Ryoko</S.Title>
            </S.Bottom>
            <S.Image />
        </S.Container>
    )
}

export default Atelier;