import * as S from "../Gallery/GalleryMobile.styles"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import products from "./data.json"
import { useRef } from "react";

const GalleryMobile = () => {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => { sliderRef.current?.slickNext(); };
  const prev = () => { sliderRef.current?.slickPrev(); };

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
  };
  return (
    <S.Container>
      <S.BtnContainer>
        <S.Btn><button onClick={prev}><img src="/icons/arrow-L.svg" /></button></S.Btn>
      </S.BtnContainer>
      <S.SlidesContainer>
        <Slider ref={sliderRef} {...settings}>
          {
            products.map((product, index) => {
              return (
                <div key={index}>
                  <a href={product.href}>
                    <S.Image src={product.image} alt={product.title} />
                  </a>
                </div>
              )
            })
          }
        </Slider>
      </S.SlidesContainer>
      <S.BtnContainer>
        <S.Btn><button onClick={next}><img src="/icons/arrow-R.svg" /></button></S.Btn>
      </S.BtnContainer>
    </S.Container>
  )
}

export default GalleryMobile;