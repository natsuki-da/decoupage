import * as S from "./CourseBasic.styles"

const CourseBasic = () => {
    return (
        <S.Container>
                    <S.Left>
                        <S.Image src="../images/basic-all02.JPG" alt="Basic Course Works" />
                    </S.Left>
                    <S.Right>
                        <S.Description>
                            <div>Basic Course</div>
                            <span>ベーシックコースの説明</span>
                        </S.Description>
                    </S.Right>
                </S.Container>
    )
}

export default CourseBasic;