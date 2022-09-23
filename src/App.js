import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Card, Button } from "react-bootstrap";
import "./index.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src="https://thumbs.dreamstime.com/b/beauty-model-girl-fashion-manicure-make-up-35653081.jpg"
              height={"390rem"}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src="https://thumbs.dreamstime.com/b/beauty-model-girl-fashion-manicure-make-up-35653081.jpg"
              height={"390rem"}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src="https://thumbs.dreamstime.com/b/beauty-model-girl-fashion-manicure-make-up-35653081.jpg"
              height={"390rem"}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src="https://thumbs.dreamstime.com/b/beauty-model-girl-fashion-manicure-make-up-35653081.jpg"
              height={"390rem"}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src="https://thumbs.dreamstime.com/b/beauty-model-girl-fashion-manicure-make-up-35653081.jpg"
              height={"390rem"}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src="https://thumbs.dreamstime.com/b/beauty-model-girl-fashion-manicure-make-up-35653081.jpg"
              height={"390rem"}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
