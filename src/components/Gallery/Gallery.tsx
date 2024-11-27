import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from "./Gallery.styles"
import products from "./data.json"
import { useRef } from 'react';

const Gallery = () => {
  const slideRef = useRef<Slider | null>(null);
  const next = () => { slideRef.current?.slickNext(); };
  const prev = () => { slideRef.current?.slickPrev(); };

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <S.Container>
      <S.BtnContainer>
        <S.Btn><button onClick={prev}><img src="/icons/arrow-L.svg" /></button></S.Btn>
      </S.BtnContainer>
      <S.SlidesContainer>
        <Slider ref={slideRef} {...settings}>
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
  );
}

export default Gallery;