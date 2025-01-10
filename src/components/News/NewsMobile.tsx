import * as S from "../../components/News/NewsMobile.styles"
import blogs from "./blog.json"

const NewsMobile = () => {
    return (
        <S.Container>
            <S.Content>
                <S.Title>News:</S.Title>
                <S.Description>
                    デコパージュ教室Atelier Rinを11月23日に開講します。
                </S.Description>
                <S.Blog>
                    <S.Title>Blog:</S.Title>
                    {blogs.map((blog, index) => {
                        return (
                            <div key={index}>
                                <a href={blog.href}>
                                    <S.BlogTitle>{blog.title}</S.BlogTitle>
                                </a>
                            </div>
                        )
                    })}
                </S.Blog>
            </S.Content>
        </S.Container>
    )
}

export default NewsMobile;