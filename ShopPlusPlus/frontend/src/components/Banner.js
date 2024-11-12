import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BannerImage from './BannerImage';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <BannerImage text="First slide" imageName="B1.jpg" />
        <Carousel.Caption>
          <h3 className="b-logo">ShopPlusPlus</h3>
          <p className="b-logo">
            Welcome to the Extraordinary, shop with new Trends.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <BannerImage text="Second slide" imageName="B2.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <BannerImage text="Third slide" imageName="B3.jpg" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
