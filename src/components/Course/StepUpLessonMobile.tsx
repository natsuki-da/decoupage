import * as S from "./StepUpLessonMobile.styles"

const StepUpLessonMobile = () => {
    return (
        <S.Container>
            <S.Up>
                <div>Step Up Lesson</div>
            </S.Up>
            <S.Middle>
                <S.Description>
                    <S.Lesson>
                        <S.Subtitle>レッスン内容</S.Subtitle>
                        <div className="lesson">ウェルカムボード or  ネームプレート</div>
                        <div className="asterisk">※クローバーStep upレッスンの内容は随時追加予定です。</div>
                    </S.Lesson>
                </S.Description>
            </S.Middle>
            <S.Down>
                <S.Image src="/images/plate01.png" alt="Basic Course Works" />
            </S.Down>
        </S.Container>
    )
}

export default StepUpLessonMobile;