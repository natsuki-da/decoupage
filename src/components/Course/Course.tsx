import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CourseBasic from './CourseBasic';
import CourseAdvanced from './CourseAdvanced';
import * as S from "./Course.styles"
import { useMediaQuery } from 'react-responsive';

const Course = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        arrows: true,
    };
    const isDesktop : boolean = useMediaQuery({query: `(min-width: 768px)`})
    return (
        <>
        {isDesktop && 
        <S.Container>
            <Slider {...settings}>
                <CourseBasic />
                <CourseAdvanced />
            </Slider>
        </S.Container>}
        {!isDesktop && 
        <S.Container>
           Hi Mobilephone!
        </S.Container>}
        </>
    )
}

export default Course;

// const Course = () => {
//     const settings = {
//         dots: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         autoplay: false,
//         arrows: true,
//     };

//     return (
//         <S.Container>
//             <Slider {...settings}>
//                 <CourseBasic />
//                 <CourseAdvanced />
//             </Slider>
//         </S.Container>
//     )
// }

// export default Course;