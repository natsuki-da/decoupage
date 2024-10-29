import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from "./Gallery.styles"

const Gallery = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <S.Container>
      <Slider {...settings}>
        <div>
          <S.Image src="../images/clock02.jpeg" alt="wall clock" />
        </div>
        <div>
          <S.Image src="../images/mobile02.jpeg" alt="phone case" />
        </div>
        <div>
          <S.Image src="../images/plate-bl02.jpeg" alt="plate blue" />
        </div>
        <div>
          <S.Image src="../images/plate-wood02.jpeg" alt="plate wood" />
        </div>
        <div>
          <S.Image src="../images/r-gold02.JPG" alt="R-object gold" />
        </div>
        <div>
          <S.Image src="../images/soap-pk.jpeg" alt="soap pink" />
        </div>
        <div>
          <S.Image src="../images/shoes-pk02.jpeg" alt="shoes pink" />
        </div>
        <div>
          <S.Image src="../images/soap-br.jpeg" alt="soap brown" />
        </div>
        <div>
          <S.Image src="../images/mobile04.jpeg" alt="phone case" />
        </div>
        <div>
          <S.Image src="../images/plate-gd02.jpeg" alt="plate gold" />
        </div>
        <div>
          <S.Image src="../images/soap-gr.jpeg" alt="soap green" />
        </div>
        <div>
          <S.Image src="../images/plate-gr01.jpeg" alt="plate green" />
        </div>
        <div>
          <S.Image src="../images/plate-rose01.jpeg" alt="plate rose" />
        </div>
        <div>
          <S.Image src="../images/r-pink01.jpeg" alt="R-object pink" />
        </div>
        <div>
          <S.Image src="../images/soap-moomin.jpeg" alt="soap moomin" />
        </div>
        <div>
          <S.Image src="../images/tote-bl01.jpeg" alt="tote bag blue" />
        </div>
        <div>
          <S.Image src="../images/plate-rose02.jpeg" alt="plate rose 02" />
        </div>
      </Slider>
    </S.Container>
  );
}

export default Gallery;