import React, { useRef, useEffect, createRef } from 'react'
import Slider from 'react-slick';
import GameCard from './GameCard';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        video: "/videos/Fruit Ninja IQ Challenge.mp4",
        title: "Fruit Ninja IQ Challenge",
        disc: "Created a hybrid experience that integrates fruit slicing with a chess-based IQ challenge for life recovery.",
        link: ""
    },
    {
        video: "/videos/Cafe-Arcade.mp4",
        title: "Cafe Arcade",
        disc: "Developed an idle management game focused on player-driven service mechanics and efficient order fulfilment in a cafe environment.",
        link: ""
    },
    {
        video: "/videos/Surf Dodge.mp4",
        title: "Surf Dodge",
        disc: "Developed a water-based navigation game focused on obstacle avoidance and fluid movement mechanics.",
        link: ""
    },
    {
        video: "/videos/Stack Ball 3D.mp4",
        title: "Stack Ball 3D",
        disc: "Engineered a fast-paced 3D game focused on optimized physics-based destruction and responsive player controls.",
        link: ""
    },
    {
        video: "/videos/Epic-Prankster.mp4",
        title: "Epic Prankster",
        disc: "Developed a stealth action game featuring multi-level room environments and strategic shooting mechanics.",
        link: ""
    },
    {
        video: "/videos/Super Mario Bros.mp4",
        title: "Super Mario Bros",
        disc: "Programmed a classic 2D platformer with refined jump-and-run physics, and enemy collisions.",
        link: ""
    },
    {
        video: "/videos/Z-Defence.mp4",
        title: "Z-Defence",
        disc: "Built a dungeon-crawler survival game featuring integrated combat systems and enemy AI navigation.",
        link: ""
    },
];

const GameSlider = () => {
    const arrowRef = useRef(null);
    const videoRefs = useRef(data.map(() => createRef()));

    // Play the centered video on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            const initialSlide = 0;
            const ref = videoRefs.current[initialSlide];
            if (ref && ref.current) {
                ref.current.play().catch(() => { });
            }
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const handleBeforeChange = (oldIndex, newIndex) => {
        // Pause the old video
        const oldRef = videoRefs.current[oldIndex];
        if (oldRef && oldRef.current) {
            oldRef.current.pause();
        }
        // Play the new video
        const newRef = videoRefs.current[newIndex];
        if (newRef && newRef.current) {
            newRef.current.play().catch(() => { });
        }
    };

    var settings = {
        className: "game-center",
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        beforeChange: handleBeforeChange,
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

    const sliderGames = data.map((item, i) => (
        <GameCard item={item} key={i} ref={videoRefs.current[i]} />
    ));

    return (
        <Container>
            <Slider ref={arrowRef} {...settings}>
                {sliderGames}
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

export default GameSlider;

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
