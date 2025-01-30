import { Glossary } from "../../../types/enums";
import * as S from "./AboutDecoupageMobile.styles"

const AboutDecoupageMobile = () => {
    return (
        <S.Container>
            <S.Block>
                <S.Content>
                    <S.Title>{Glossary.About_Decoupage}</S.Title>
                    <S.Description>
                        デコパージュとは、イタリア発祥のペーパークラフトです。<br />
                        ペーパーをカットし、専用の接着剤（グルー）で素材に貼り付け、コーティングすることで、ペーパーが素材と一体化し、まるで既製品の様な作品を創作することができます。<br />
                        木、布、プラスチック、陶器、ガラス、石鹸など、様々な素材・サイズでの創作が可能なため、小物や生活雑貨から飾り物まで、幅広く自分好みにアレンジすることができます。<br />
                        主にデコパージュに使用するペーパーナプキンのデザインは無限にあり、当教室でも500枚以上のペーパーからお好きなデザインを選ぶことができ、とても楽しい時間の一つです。
                        暮らしを彩るデコパージュ、ぜひ一緒に楽しみましょう。<br />
                    </S.Description>
                </S.Content>
            </S.Block>
        </S.Container>
    )
}

export default AboutDecoupageMobile;