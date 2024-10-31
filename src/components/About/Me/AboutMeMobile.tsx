import * as S from "../Me/AboutMeMobile.styles"

const AboutMeMobile = () => {
    return (
        <S.Container>
            <S.Left>
                <S.Title>About Me</S.Title>
                <S.Description>
                はじめまして☺︎Ryokoと申します🌸<br/>
                奈良市でデコパージュサロンのオープンを目指し、準備中です🌷<br/>

                デコパージュは母の趣味でもあり、幼い頃からとても身近なものでした。<br/>
                時々フォトフレームを作成しては友人にプレゼントをして楽しんでいましたが、<br/>
                コロナ禍であった2020年、現代風にアレンジされた新しいデコパージュの世界を知り、<br/>
                素敵なお教室とのご縁もあり、完全にのめり込み、今に至ります。<br/>
                2024年1月、結婚を機に長年勤めた会社を退職し、現在はお教室オープンを目指して準備中です。<br/>

                まだまだ知られていないデコパージュの魅力を発信することはもちろん、<br/>
                暮らしを豊かにする様々なモノコトを気軽に綴っていけたらと思います🌷<br/>
                </S.Description>
            </S.Left>
            <S.Right>
                <S.Image src="../../images/welcome.jpeg" alt="welcome-plate" className="welcome" />
            </S.Right>
        </S.Container>
    )
}

export default AboutMeMobile;