import "./Banner.css";
import Carousel from "react-bootstrap/Carousel";

export default function Banner() {
  return (
    <div className="featured-jams-banner">
      <div class="marquee">
        <div class="marquee__inner" aria-hidden="true">
          <span>
            * g'jam with us * your jam is our jam * jamming to the beat of your
            yum * bottled organic and fresh
          </span>
          <span>
            * g'jam with us * your jam is our jam * jamming to the beat of your
            yum * bottled organic and fresh
          </span>
          <span>
            * g'jam with us * your jam is our jam * jamming to the beat of your
            yum * bottled organic and fresh
          </span>
          <span>
            * g'jam with us * your jam is our jam * jamming to the beat of your
            yum * bottled organic and fresh
          </span>
          <span>
            * g'jam with us * your jam is our jam * jamming to the beat of your
            yum * bottled organic and fresh
          </span>
          <span>
            * g'jam with us * your jam is our jam * jamming to the beat of your
            yum * bottled organic and fresh
          </span>
          <span>
            * g'jam with us * your jam is our jam * jamming to the beat of your
            yum * bottled organic and fresh
          </span>
          <span>
            * g'jam with us * your jam is our jam * jamming to the beat of your
            yum * bottled organic and fresh
          </span>
        </div>
      </div>
      <Carousel variant="dark" className="img-crop">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/wMP7cD6.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/IOlMZuo.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/glGnqRg.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* <img
        className="img-crop"
        src="https://i.imgur.com/gIQ40c6.png"
        alt="banner"
      /> */}
    </div>
  );
}
