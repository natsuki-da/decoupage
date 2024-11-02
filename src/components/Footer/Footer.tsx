import * as S from "./Footer.styles"

const Footer = () =>  {
    return (
        <S.Container>
            <S.Contents>
                <S.Icons>
                    <a href="https://www.instagram.com/atelier_rin_deco/"><img src="../icons/instagram.png" alt="instagram"></img></a>
                    {/* <a href="https://www.ameba.jp/profile/general/rin-deco/"><img src="../icons/blogging.png" alt="blog"></img></a> */}
                </S.Icons>
                <div>Footer</div>
            </S.Contents>
        </S.Container>
    )
}

export default Footer;