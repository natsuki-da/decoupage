import { Bttn, Glossary, Paths } from "../../../types/enums";
import * as S from "./AboutSchool.styles";
import { Link } from 'react-router-dom';

const AboutSchool = () => {
    return (
        <S.Container>
            <S.Left>
                <S.Image src="../../images/basket01.JPG" alt="basket green" className="welcome" />
            </S.Left>
            <S.Right>
                <S.Title>{Glossary.Title}</S.Title>
                <S.Description>
                    <div>
                        デコパージュ教室Atelier Rinは、女性専用の少人数制（1~3名）のレッスンとなります。<br />
                        自宅レッスンとなりますので、詳細は個別にご案内させていただきます。<br />
                    </div>
                    <div id="kaigyo" />
                    <div>
                        完全予約制となりますので、以下のお問い合わせ方法よりご連絡ください。<br />
                        ・当ウェブサイトのcontactフォーム<br />
                        ・ブログのお問い合わせフォーム<br />
                        ・InstagramのDM<br />
                    </div>
                    <div id="kaigyo" />
                    お気軽にお問合せください<br />
                </S.Description>
                <S.ButtonContainer>
                    <S.Button><Link to={Paths.ABOUT_ATELIER_RIN}>{Bttn.Read_More}</Link></S.Button>
                </S.ButtonContainer>
            </S.Right>
        </S.Container>
    )
}

export default AboutSchool;
