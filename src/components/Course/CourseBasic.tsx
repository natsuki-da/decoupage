import * as S from "./CourseBasic.styles"

const CourseBasic = () => {
    return (
        <S.Container>
                    <S.Left>
                        <S.Image src="../images/basic-all02.JPG" alt="Basic Course Works" />
                    </S.Left>
                    <S.Right>
                        <S.Description>
                            <S.Title>Basic Course</S.Title>
                            <S.Lesson>
                                <S.Subtitle>レッスン内容</S.Subtitle>
                                <div className="lesson">Lesson1  ソープ技法（石鹸）</div>
                                <div className="lesson">Lesson2 キャンドル技法（LEDキャンドル）</div>
                                <div className="lesson">Lesson3 ガラス技法（ガラス皿）</div>
                                <div className="lesson">Lesson4 ファブリック技法（トートバック or 帆布バスケット）</div>
                                <div className="lesson">Lesson5 プラスチック技法（スマホケース）</div>
                                <div className="lesson">Lesson6 陶器技法（陶器プレート）</div>
                                <div className="lesson">Lesson7 ウッド技法（ウッドトレイ）</div>
                                <div className="asterisk">※素材の在庫状況や生徒様のご希望により、レッスン内容が前後する場合もあります。</div>
                                <div>※素材の廃盤等があった場合、他の素材に変更になる場合があります。</div>
                                <ul>
                                    <li>デコパージュの様々な素材における、基本的な技術を身につけることができます。</li>
                                    <li>デコパージュ初心者の方は、こちらのコースからスタートいただきます。</li>
                                    <li>Basic Course受講終了後(受講途中でも可)、別の素材でのフリーレッスンを受講いただけます。</li>
                                </ul>
                            </S.Lesson>
                        </S.Description>
                    </S.Right>
                </S.Container>
    )
}

export default CourseBasic;