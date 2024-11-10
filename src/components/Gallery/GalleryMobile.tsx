import * as S from "../Gallery/GalleryMobile.styles"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import products from "./data.json"

const GalleryMobile = () => {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: true,
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
    )
}

export default GalleryMobile;