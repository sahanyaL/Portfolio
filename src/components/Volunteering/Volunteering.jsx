import React from 'react'
import styled from 'styled-components';
import { Zoom, Slide } from 'react-awesome-reveal';

const volunteerData = [
    {
        role: "Guest Speaker",
        org: "LEVELSTAIR",
        disc: "Conducted an introductory Game Development session, educating an audience on industry fundamentals and logic using Construct 2.",
        img: "/images/levelstair.jpg"
    },
    {
        role: "Event Organizer",
        org: "Brain Tech (Walasmulla National School)",
        disc: "Organized a 2-day technology event (Quizathon & Ideathon) to promote innovation and creative problem-solving among students.",
        img: "/images/braintech.jpg"
    }
];

const Volunteering = () => {
    return (
        <Container id='volunteering'>
            <Slide direction="left">
                <span className="green">Community Involvement</span>
                <h1>Volunteering</h1>
            </Slide>
            <Cards>
                {volunteerData.map((item, i) => (
                    <Zoom key={i} delay={i * 200}>
                        <Card>
                            <ImageWrapper>
                                <img src={item.img} alt={item.org} />
                            </ImageWrapper>
                            <Content>
                                <h2>{item.role}</h2>
                                <span className="org">{item.org}</span>
                                <p>{item.disc}</p>
                            </Content>
                        </Card>
                    </Zoom>
                ))}
            </Cards>
        </Container>
    )
}

export default Volunteering;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width: 840px){
        width: 90%;
    }

    span.green{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }
`

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2rem;

    @media(max-width: 768px){
        grid-template-columns: 1fr;
    }
`

const Card = styled.div`
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 400ms ease-in-out, box-shadow 400ms ease-in-out;
    
    &:hover{
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(26, 86, 219, 0.15);
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    height: 14rem;
    overflow: hidden;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }

    ${Card}:hover & img{
        transform: scale(1.05);
    }
`

const Content = styled.div`
    padding: 1.5rem;

    h2{
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.3rem;
    }

    .org{
        font-size: 0.85rem;
        color: #1a56db;
        font-weight: 500;
        display: block;
        margin-bottom: 0.8rem;
    }

    p{
        font-size: 0.85rem;
        color: rgba(0, 0, 0, 0.6);
        line-height: 1.5;
    }
`
