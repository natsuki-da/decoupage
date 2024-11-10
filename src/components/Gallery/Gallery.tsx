import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from "./Gallery.styles"
import products from "./data.json"

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
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <S.Container>
      <Slider {...settings}>
        {
          products.map((product, index)=>{
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
    </S.Container>
  );
}

export default Gallery;