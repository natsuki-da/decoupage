import { Glossary } from "../../../../types/enums";
import Navigationbar from "../../../Navigationbar/Navigationbar";
import * as S from "./Atelier.styles"

const Atelier = () => {
    return (
        <S.Container>
           <Navigationbar />
            <S.Top  id="atelier_rin">
                <S.TopContent>
                    <S.Title>{Glossary.Title}</S.Title>
                    <S.Contents>
                        <S.Details>
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
                        </S.Details>
                        <S.ImageBlock>
                            <S.AtelierPic src="../../images/welcome.jpeg" alt="welcome pic" />
                        </S.ImageBlock>
                    </S.Contents>
                </S.TopContent>
            </S.Top>
            <S.Bottom id="instructor">
                <S.BottomContent>
                    <S.Title>{Glossary.Instructor}</S.Title>
                    <S.Profile>
                        デコパージュ教室Atelier Rinを主宰していますRyokoと申します。<br />
                        奈良市自宅にて、2024年秋にデコパージュ教室を開講いたしました。<br />
                        <div id="kaigyo" />
                        まだまだ知られていないデコパージュですが、<br />
                        私にとっては、母の趣味であったことから、幼い頃からとても身近なものでした。<br />
                        <div id="kaigyo" />
                        母が習得していたデコパージュは昔ながらの技法で、<br />
                        主に白木の素材に、何十回ものニス塗りと削る作業を何度も繰り返し、<br />
                        気が遠くなるような工程を経て完成させるものでした。<br />
                        <div id="kaigyo" />
                        作品は素敵だけど趣味にするには大変そう…という気持ちが大きく、<br />
                        私自身は、時々友人へのプレゼントのためにフォトフレームを作成するくらいで、<br />
                        細々と楽しんでいました。<br />
                        <div id="kaigyo" />
                        そんな中、コロナ禍であった2020年から、完全にのめり込むことに。<br />
                        <div id="kaigyo" />
                        お家時間が増えたこともあり、この機会にデコパージュを深く学ぼう！と、<br />
                        SNSで色々と作品をリサーチし始めたところ、<br />
                        現代風にアレンジされた新しいデコパージュの世界を知りました。<br />
                        <div id="kaigyo" />
                        レトロなイメージが強かったデコパージュですが、<br />
                        こんなお洒落で、かつ様々な素材にも応用できることを知り、<br />
                        とてもワクワクしたことを覚えています。<br />
                        <div id="kaigyo" />
                        素敵なお教室、先生方とのご縁のおかげで、<br />
                        すっかりデコパージュに魅了され、<br />
                        様々な技法を学び、ディプロマも取得。<br />
                        <div id="kaigyo" />
                        約15年大阪に長く勤務してきましたが、<br />
                        結婚を機に退職し、この度Atelier Rinを開講する流れとなりました。<br />
                        <div id="kaigyo" />
                        <div id="kaigyo" />
                        創作する際は、「心をこめて丁寧に」を大切にしています。<br />
                        どなたかにプレゼントをする際は、伝えたい気持ちを込めて。<br />
                        自分用にしても、ただ何となく作るのではなく、テーマやイメージを大切に。<br />
                        <div id="kaigyo" />
                        どんな風に使おうかな？どこに飾ろう？どんな雰囲気の作品にしようかな？などなど。<br />
                        イメージをもって、心をこめて、時間をかけて作った作品は、<br />
                        何となくで作成したものとは全く輝きが違います。<br />
                        <div id="kaigyo" />
                        もちろん綺麗に完成させ、表現するための技術を学ぶことも大切ですので、<br />
                        その点はゆっくり丁寧にレッスンさせていただきますね♪<br />
                        <div id="kaigyo" />
                        日々の暮らしを彩ってくれたり、<br />
                        特別な日をより輝かせてくれたり、<br />
                        大切な人へ想いを伝えられたり。<br />
                        <div id="kaigyo" />
                        そんなデコパージュの魅力をお伝えできたらと思います。<br />
                        みなさまとのご縁を心待ちにしています♡<br />
                    </S.Profile>
                    <S.ProfileBottom>
                        <S.ProfilePic src="../../images/profile.JPG" alt="profile picture" />
                        <S.ProfileBottomText>
                            <span>- 取得ディプロマ -<br /></span>
                            奈良市デコパージュ教室Room-Eiko/オリジナルコース過程修了<br />
                            茅ヶ崎市デコパージュ教室Atelier Maison de la Mer/プルミエールプチコース過程修了<br />
                            アッシュデコールディプロマコース過程修了
                        </S.ProfileBottomText>
                    </S.ProfileBottom>
                </S.BottomContent>
            </S.Bottom>
        </S.Container>
    )
}

export default Atelier;
