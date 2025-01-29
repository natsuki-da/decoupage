import { useState } from "react"
import * as S from "./Navigationbar.styles"
import Menu from "./Menu";
import { Glossary, Paths } from "../../types/enums";

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
                        <a href={Paths.HOME}><S.Title>{Glossary.Title}</S.Title></a>
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