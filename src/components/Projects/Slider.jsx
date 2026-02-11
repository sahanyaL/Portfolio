import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import pic1 from "./img1.png";
import pic2 from "./img2.png";
import pic3 from "./img3.png";
import pic4 from "./img4.png";

let data = [
  {
    img: pic1,
    disc: "ToursSL offers curated tours showcasing Sri Lanka's beauty, from cultural expeditions to wildlife adventures. With seamless booking and expert guides, create unforgettable memories exploring the charm of Sri Lanka.",
    link: "https://github.com/sahanyaL/toursl.github.io"
  },
  {
    img: pic2,
    disc: "HearLink revolutionizes digital communication with real-time sign language translation and speech recognition. It aims to empower users with hearing impairments to engage effortlessly in meaningful conversations, enhancing accessibility and inclusivity.",
    link: "https://github.com/sahanyaL/HearLink"
  },
  {
    img: pic3,
    disc: "The Shopping Manager System simplifies inventory management with essential functionalities for businesses. Built for modularity and scalability, it optimizes workflow efficiency, making inventory tasks easier for managers.",
    link: "https://github.com/sahanyaL/Shopping-Manager"
  },
  {
    img: pic4,
    disc: "🌟 Organized SYNOTEC 24 ICT Day at Wallasmulla National School, igniting passion and creativity in students through engaging activities like quizathons and ideathons. Inspired by their dedication, we're shaping a brighter tomorrow, one innovative solution at a time! 🚀",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7181276787740475392/"
  }
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => (
    <Project item={item} key={i} />
  ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'><IoIosArrowBack /></button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className='next'><IoIosArrowForward /></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #1a56db;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`
