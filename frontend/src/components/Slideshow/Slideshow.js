import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../../images/posters/1.jpg';
import pic2 from '../../images/posters/2.jpg';
import pic3 from '../../images/posters/3.jpg';
import pic4 from '../../images/posters/4.jpg';
import pic5 from '../../images/posters/5.jpg';
import './Slideshow.scss';

function Slideshow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='carousel-img' src={pic1} alt="Постер" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel-img' src={pic2} alt="Постер" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel-img' src={pic3} alt="Постер" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel-img' src={pic4} alt="Постер" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel-img' src={pic5} alt="Постер" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;