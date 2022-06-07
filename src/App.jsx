import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Carousel from "./components/Carousel/Carousel";
import Minifooter from "./components/Footer/Minifooter";
import CarouselBest from "./components/Carousel/CarouselBest";
import CarouselReviews from "./components/CarouselReviews/CarouselReviews";
import CarouselReviewsGoole from "./components/CarouselReviewsGoogle/CarouselReviewsGoogle";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Jumbotron />
      <Carousel />
      <Minifooter />
      <CarouselBest />
      <CarouselReviews />
      <CarouselReviewsGoole />
      <Footer />
    </>
  );
}

export default App;
