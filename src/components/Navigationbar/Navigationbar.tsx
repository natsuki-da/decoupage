import { useState } from "react"
import * as S from "./Navigationbar.styles"
import Menu from "./Menu";
import { Paths, Title } from "../../types/enums";

const Navigationbar = () => {
    const [isClickedMenu, setClickedMenu] = useState<boolean>(false);
    const clickedMenu = () => {
        setClickedMenu(true);
    }
    return (
        <>
            {!isClickedMenu && (
                <S.Container>
                    <S.Header>
                        <a href={Paths.HOME}><S.Title>{Title.Title}</S.Title></a>
                        <S.Button onClick={clickedMenu} >
                            <S.Image src="../../icons/hamburger.svg" alt="menu icon" />
                        </S.Button>
                    </S.Header>
                </S.Container>
            )}
            {isClickedMenu && (
                <Menu isClickedMenu={isClickedMenu} setClickedMenu={setClickedMenu} />
            )}
        </>
    )
}

export default Navigationbar;


{/* <S.Title>Atlier Rin</S.Title>
            <S.Line />
            <S.HeaderLinks>
                <Link
                    to={Paths.HOME}
                    style={{
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <S.HeaderLink>{Nav.HOME}</S.HeaderLink>
                </Link>
                <Link
                    to={Paths.ABOUT}
                    style={{
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <S.HeaderLink>{Nav.ABOUT}</S.HeaderLink>
                </Link>

                <Link
                    to={Paths.COURSE}
                    style={{
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <S.HeaderLink>{Nav.COURSE}</S.HeaderLink>
                </Link>

                <Link
                    to={Paths.GALLERY}
                    style={{
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <S.HeaderLink>{Nav.GALLERY}</S.HeaderLink>
                </Link>
                <Link
                    to={Paths.CONTACT}
                    style={{
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <S.HeaderLink>{Nav.CONTACT}</S.HeaderLink>
                </Link>
            </S.HeaderLinks>
            <S.Sidebar>Hello</S.Sidebar>
            <S.Line /> */}