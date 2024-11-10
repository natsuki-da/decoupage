import * as S from "./CourseBasicMobile.styles"

const CourseBasicMobile = () => {
    return (
        <S.Container>
            <S.Up>
                <div>Basic Course</div>
            </S.Up>
            <S.Middle>
                <S.Description>
                    <span>ベーシックコースの説明</span>
                </S.Description>
            </S.Middle>
            <S.Down>
                <S.Image src="../images/basic-all02.JPG" alt="Basic Course Works" />
            </S.Down>
        </S.Container>
    )
}

export default CourseBasicMobile;