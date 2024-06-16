// import { Link } from "react-router-dom";
// import { Nav, Paths } from "../../types/enums";
import * as S from "./Navigationbar.styles"
import DropdownMenu from "./DropdownMenu";


const Navigationbar = () => {
    return (
        <S.Main>
            <S.Header>
                <S.Button>
                {/* <S.Button onClick={handleDropdownMenu}> */}
                    <S.Image src="../icons/flower-icon01.svg" />
                </S.Button>
                <DropdownMenu/>
            </S.Header>
        </S.Main>
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