import * as S from "./CourseAdvanced.styles"

const CourseAdvanced = () => {
    return (
        <S.Container>
            <S.Left>
                <S.Description>
                    <div>Advanced Course</div>
                    <span>アドバンスコースの説明</span>
                </S.Description>
            </S.Left>
            <S.Right>
                <S.Image src="../images/basic-all02.JPG" alt="Basic Course Works" />
            </S.Right>
        </S.Container>

    )
}

export default CourseAdvanced;