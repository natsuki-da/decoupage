import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from "./Course.styles"
import { useMediaQuery } from 'react-responsive';
import { useRef } from 'react';
import CourseBasic from './CourseBasic';
import StepUpLesson from './StepUpLesson';

const Course = () => {
    const sliderRef = useRef<Slider | null>(null);
    const next = () => { sliderRef.current?.slickNext(); };
    const prev = () => { sliderRef.current?.slickPrev(); };

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        arrows: false,
    };

    const isDesktop: boolean = useMediaQuery({ query: `(min-width: 768px)` })
    return (
        <>
            <S.Container>
                <S.BtnContainer>
                    <S.Btn><button onClick={prev}><img src="/icons/arrow-L.svg" /></button></S.Btn>
                </S.BtnContainer>
                {isDesktop &&
                    <S.SlidesContainer>
                        <Slider ref={sliderRef} {...settings}>
                            <CourseBasic />
                            <StepUpLesson />
                        </Slider>
                    </S.SlidesContainer>
                }
                <S.BtnContainer>
                    <S.Btn><button onClick={next}><img src="/icons/arrow-R.svg" /></button></S.Btn>
                </S.BtnContainer>
            </S.Container>
        </>
    )
}

export default Course;


{/* <div style={{ textAlign: "center" }}>
                <button className="button" onClick={prev}>
                  Previous
                </button>
                <button className="button" onClick={next}>
                  Next
                </button>
              </div> */}