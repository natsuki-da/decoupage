import { Glossary } from "../../../types/enums";
import * as S from "./AboutSchool.styles"

const AboutSchool = () => {
    return (
        <S.Container>
            <S.Left>
                <S.Image src="../../images/basket01.JPG" alt="basket green" className="welcome" />
            </S.Left>
            <S.Right>
                <S.Title>{Glossary.Atelier_Rin}</S.Title>
                <S.Description>
                    <div>
                        デコパージュ教室Atelier Rinは、女性専用の少人数制（1~3名）のレッスンとなります。<br />
                        自宅レッスンとなりますので、詳細は個別にご案内させていただきます。<br />
                    </div>
                    ＊最寄駅＊<br />
                    近鉄けいはんな線「学研奈良登美ヶ丘」駅<br />
                    <span>徒歩約15~20分／バス約5分<br /></span>
                    近鉄奈良線「学園前」駅<br />
                    <span>バス約15分<br /></span>
                    お車も可能ですので、ご相談くださいませ。<br />
                    <div>
                        完全予約制となりますので、以下のお問い合わせ方法よりご連絡ください。<br />
                        ・当ウェブサイトのcontactフォーム<br />
                        ・ブログのお問い合わせフォーム<br />
                        ・InstagramのDM<br />
                    </div>
                    お気軽にお問合せください<br />
                </S.Description>
            </S.Right>
        </S.Container>
    )
}

export default AboutSchool;