import { Bttn, Glossary, Paths } from "../../../types/enums";
import * as S from "./AboutMe.styles"

const AboutMe = () => {
    return (
        <S.Container>
            <S.Left>
                <S.Title>{Glossary.Instructor}</S.Title>
                <S.Description>
                    デコパージュ教室Atelier Rinを主宰していますRyokoと申します。<br />
                    奈良市自宅にて、2024年秋にデコパージュ教室を開講いたしました。<br />
                    <div id="kaigyo" />
                    日々の暮らしを彩ってくれたり、<br />
                    特別な日をより輝かせてくれたり、<br />
                    大切な人へ想いを伝えられたり。<br />
                    <div id="kaigyo" />
                    そんなデコパージュの魅力をお伝えできたらと思います。<br />
                    みなさまとのご縁を心待ちにしています♡<br />
                </S.Description>
                <S.ButtonContainer>
                    <S.Button><a href={Paths.ABOUT_INSTRUCTOR}>{Bttn.Read_More}</a></S.Button>
                </S.ButtonContainer>
            </S.Left>
            <S.Right>
                <S.Image src="../../images/welcome.jpeg" alt="welcome-plate" className="welcome" />
            </S.Right>
        </S.Container>
    )
}

export default AboutMe;