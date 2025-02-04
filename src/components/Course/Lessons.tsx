import Navigationbar from "../Navigationbar/Navigationbar";
import * as S from "./Lessons.styles"

const Lessons = () => {
    // const prev = () => {
    //     alert("PREV!!")
    // }
    return (
        <S.Container>
            <Navigationbar />
            <S.Top>
                <S.TopContent>
                    <S.Title>Lesson Menu</S.Title>
                    当教室では、以下のレッスンを受講いただけます。<br />
                    世界に一つだけの素敵な作品を一緒に楽しみながら創作しましょう<img className="icon" src="../../icons/sakura.png" alt="sakura" /><br />
                    <S.ScheduleDetail>
                        <div className="dashed_line" />
                        <img className="icon" src="../../icons/pencil.png" alt="pencil" />レッスン時間<br />
                        約2時間30分（10:00~12:30 / 14:00~16:30）Tea付<br />
                        <img className="icon" src="../../icons/calendar.png" alt="calender" />レッスン日<br />
                        基本的には、火曜～金曜日の平日となりますが、<br />
                        土曜日につきましては、調整可能な場合もございます。<br />
                        個別に調整させていただきますので、お気軽にお問い合わせくださいませ。<br />
                        <div className="dashed_line" />
                    </S.ScheduleDetail>
                </S.TopContent>
            </S.Top>
            <S.Bottom>
                <S.Lesson>
                    <S.LessonPlan>
                        <S.LessonName>Trial Lesson<span>トライアルレッスン</span></S.LessonName>
                        <S.LessonContent>
                            ＊ 何か新しい趣味を見つけたい<br />
                            ＊ 自分時間を充実させたい<br />
                            ＊ 身のまわりのものを自分好みに素敵にしたい…<br />
                            ＊ 友人に何か心のこもったプレゼントを作りたい…<br />
                            ＊ デコパージュってどんなもの…？？<br />
                            <img className="icon" src="../../icons/point.png" alt="point finger" />
                            まずはデコパージュの楽しさを一度ご体験ください♪<br />
                        </S.LessonContent>
                        <S.LessonDetail>
                            <img className="icon" src="../../icons/scissors.png" alt="scissors" />
                            レッスン内容：デコパージュ石鹸
                        </S.LessonDetail>
                        <S.LessonFee>
                            <img className="icon" src="../../icons/coin-purse.png" alt="coin purse" />
                            レッスン料：税込3,000円（材料費込）
                        </S.LessonFee>
                    </S.LessonPlan>
                    <S.ImageBlock>
                        <S.LessonImage src="../../images/soap-br.jpeg" alt="soap" />
                    </S.ImageBlock>
                </S.Lesson>
                <S.Lesson>
                    <S.LessonBasicPlan>
                        <S.LessonTop>
                            <S.LessonName>Basic Course<span>ベーシックコース</span></S.LessonName>
                            <S.LessonContent>
                                ＊ デコパージュの様々な素材における、基本的な技術を身につけることができます。<br />
                                ＊ デコパージュ初心者の方は、こちらのコースをお勧めいたします。<br />
                                ＊ ベーシックコース受講終了後（受講途中可）、フリーレッスンを受講いただけます。<br />
                            </S.LessonContent>
                        </S.LessonTop>
                        <S.LessonMiddle>
                            <S.LessonDetail>
                                <img className="icon" src="../../icons/scissors.png" alt="scissors" />
                                レッスン内容<br />
                                Lesson1 ソープ技法（石鹸<br />
                                Lesson2 キャンドル技法（LEDキャンドル）<br />
                                Lesson3 ガラス技法（ガラス皿）<br />
                                Lesson4 ファブリック技法（トートバック or 帆布バスケット）<br />
                                Lesson5 プラスチック技法（スマホケース）<br />
                                Lesson6 陶器技法（陶器プレート）<br />
                                Lesson7 ウッド技法（ウッドトレイ）<br />
                                ※ 素材の在庫状況や生徒様のご希望により、レッスン内容が前後する場合もあります。<br />
                                ※ 素材の廃盤等があった場合、他の素材に変更になる場合があります。<br />
                            </S.LessonDetail>
                            <S.LessonFee>
                                <img className="icon" src="../../icons/coin-purse.png" alt="coin purse" />レッスン料<br />
                                【都度払】税込3,000円×レッスン10回<br />
                                ＋材料費15,000円を初回にお支払いただきます。<br />
                                【一括払】税込45,000円（材料費込）<br />
                                ※ スマホケース代は別料金となります。<br />
                                ※ トライアルレッスン受講後、ベーシックコースへ移行いただく際は、1回分のレッスンに充当し、上記金額より3,000円引かせていただきます。<br />
                            </S.LessonFee>
                        </S.LessonMiddle>
                        <S.LessonBottom>
                            <S.SlideContainer>
                                {/* <S.SlideButtonContainer>
                                    <S.SlideButton><button onClick={prev} ><img src="/icons/arrow-L.svg" /></button></S.SlideButton>
                                </S.SlideButtonContainer> */}
                                <S.Slides>
                                    <S.SlideImage id="basic01" src="/../../images/basic01.JPG" alt="" />
                                    <S.SlideImage id="basic03" src="/../../images/basic02.JPG" alt="" />
                                    <S.SlideImage id="basic03" src="/../../images/basic03.JPG" alt="" />
                                    <S.SlideImage id="basic04" src="/../../images/basic04.JPG" alt="" />
                                    <S.SlideImage id="basic05" src="/../../images/basic05.JPG" alt="" />
                                    <S.SlideImage id="basic06" src="/../../images/basic06.JPG" alt="" />
                                    <S.SlideImage id="basic07" src="/../../images/basic07.JPG" alt="" />
                                    <S.SlideImage id="basic08" src="/../../images/basic08.jpeg" alt="" />
                                </S.Slides>
                                <S.ScrollbarContainer>
                                    <a href="#basic01">1</a>
                                    <a href="#basic02">2</a>
                                    <a href="#basic03">3</a>
                                    <a href="#basic04">4</a>
                                    <a href="#basic05">5</a>
                                    <a href="#basic06">6</a>
                                    <a href="#basic07">7</a>
                                    <a href="#basic08">8</a>
                                </S.ScrollbarContainer>
                                {/* <S.SlideButtonContainer>
                                    <S.SlideButton><button><img src="/icons/arrow-R.svg" /></button></S.SlideButton>
                                </S.SlideButtonContainer> */}
                            </S.SlideContainer>
                        </S.LessonBottom>
                    </S.LessonBasicPlan>
                </S.Lesson>
                <S.Lesson>
                    <S.LessonPlan>
                        <S.LessonName>Step Up Lesson<span>ステップアップレッスン</span></S.LessonName>
                        <S.LessonContent>
                            ＊ ベーシックコースで学んだことを活かしながら、さらに技術を磨くことができます。<br />
                            ＊ ロゴを取り入れることで、より自分好みの作品を創作できます。<br />
                            ＊ 当レッスンは随時内容を追加予定です。<br />
                        </S.LessonContent>
                        <S.LessonDetail>
                            <img className="icon" src="../../icons/scissors.png" alt="scissors" />
                            レッスン内容：ウェルカムボード or ネームプレート
                        </S.LessonDetail>
                        <S.LessonFee>
                            <img className="icon" src="../../icons/coin-purse.png" alt="coin purse" />レッスン料：税込4,000円<br />
                            ※材料費は別途頂戴いたします。<br />
                            ※2回目以降のレッスンは税込3,000円となります。<br />
                        </S.LessonFee>
                    </S.LessonPlan>
                    <S.ImageBlock>
                        <S.LessonImage src="../../images/plate02.png" alt="name plate" />
                    </S.ImageBlock>
                </S.Lesson>
                <S.Lesson>
                    <S.LessonPlan>
                        <S.LessonName>Atelier Maison de la Mer<span>認定コース</span></S.LessonName>
                        <S.LessonContent>
                            ＊ 茅ヶ崎市デコパージュ教室Atelier Maison de la Merの以下のコースを、当教室でも受講することができます。<br />
                            ＊ ベーシックコースとはまた異なる技術や転写法を学ぶことができ、作品の幅が広がります。<br />
                            ＊ ベーシックコースを受講いただかなくても、受講可能です。<br />
                            コース内容の詳細は、リンク先にてご確認ください。<br />
                        </S.LessonContent>
                        <S.LessonDetail>
                            <img className="icon" src="../../icons/scissors.png" alt="scissors" />
                            プルミエールpetitコース → 詳細はこちら<br />
                            <img className="icon" src="../../icons/scissors.png" alt="scissors" />
                            アッシュデコール ディプロマコース → 詳細はこちら<br />
                        </S.LessonDetail>
                    </S.LessonPlan>
                    <S.ImageBlock>
                        <S.LessonImage src="../../images/plate-wood01.JPG" alt="wooden plate" />
                    </S.ImageBlock>
                </S.Lesson>
                <S.Lesson>
                    <S.LessonPlan>
                        <S.LessonName>Free Lesson<span>フリーレッスン</span></S.LessonName>
                        <S.LessonContent>
                            ＊ ベーシックコースの受講終了後(受講途中可)、フリーレッスンを受講いただけます。<br />
                            ＊ 自由に素材を選びながらさらに作品の幅を広げ、デコパージュを楽しみましょう！<br />
                        </S.LessonContent>
                        <S.LessonFee>
                            <img className="icon" src="../../icons/coin-purse.png" alt="coin purse" />レッスン料：税込3,000円<br />
                            ※こちらで材料をご準備する場合、材料費は別途頂戴いたします。<br />
                        </S.LessonFee>
                    </S.LessonPlan>
                    <S.ImageBlock>
                        <S.LessonImage src="../../images/tissue-box.JPG" alt="tissue box" />
                    </S.ImageBlock>
                </S.Lesson>
                <S.Lesson>
                    <S.LessonPlan>
                        <S.LessonName>Seasonal Lesson<span>季節の1dayレッスン</span></S.LessonName>
                        <S.LessonContent>
                            ＊ 不定期となりますが、季節を楽しむことができるレッスンを開講します。<br />
                            ＊ 開講の際は、当サイト、ブログやInstagramにて詳細をご案内いたします。<br />
                        </S.LessonContent>
                    </S.LessonPlan>
                    <S.ImageBlock>
                        <S.LessonImage></S.LessonImage>
                    </S.ImageBlock>
                </S.Lesson>
            </S.Bottom>
        </S.Container>
    );
};

export default Lessons;
