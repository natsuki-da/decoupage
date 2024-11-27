import * as S from "./StepUpLesson.styles"

const StepUpLesson = () => {
    return (
        <S.Container>
            <S.Left>
            <S.Description>
                            <S.Title>Step Up Lesson</S.Title>
                            <S.Lesson>
                                <S.Subtitle>レッスン内容</S.Subtitle>
                                <div className="lesson">ウェルカムボード or  ネームプレート</div>
                                <div className="asterisk">※クローバーStep upレッスンの内容は随時追加予定です。</div>
                            </S.Lesson>
                        </S.Description>
            </S.Left>
            <S.Right>
                <S.Image src="/images/plate01.png" alt="Step Up Lesson" />
            </S.Right>
        </S.Container>

    )
}

export default StepUpLesson ;