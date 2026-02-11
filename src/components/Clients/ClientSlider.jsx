import React from 'react'
import styled from 'styled-components'
import { IoIosQuote } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";

const ClientSlider = (props) => {
    const { name, position, stars, disc, link } = props.item;
    return (
        <Container>
            <Header>
                <span className='quote'><IoIosQuote /></span>
                <div>
                    {Array(stars).fill().map((_, i) => (
                        <span className='star' key={i}>
                            <AiOutlineStar />
                        </span>
                    ))}
                </div>
            </Header>
            <Body>
                {disc}
                <a href={link} className="credential-link" target="_blank" rel="noopener noreferrer">
                    <StyledButton className="btn btn-github2">Show Credential</StyledButton>
                </a>
            </Body>
            <Footer>

                <div className="details">
                    <h1>{name}</h1>
                    <p>{position}</p>
                </div>
            </Footer>
        </Container>
    )
}

export default ClientSlider

const Container = styled.div`
    background: #ffffff;
    padding: 1.5rem 1rem;
    margin: 0 1rem;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .quote{
        font-size: 3rem;
        color: #1a56db;
        opacity: 0.7;
    }

    .star{
        color: #ffcd3c;
        font-size: 1.3rem;
    }
`
const Body = styled.p`
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
`
const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    img{
        width: 4rem;
        height: 4rem;
        border-radius: 50px;
        object-fit: cover;
    }

    h1{
        font-size: 1.2rem;
        font-weight: 700;
        @media(max-width: 580px){
            font-size: 1rem;
        }
        @media(max-width: 538px){
            font-size: 0.9rem;
        }
    }

    p{
        font-size: 0.8rem;
        color: rgba(0, 0, 0, 0.55);
        @media(max-width: 538px){
            font-size: 0.6rem;
        }
    }
`

const StyledButton = styled.button`
    color: white;
    background-color: #1a56db;
    border: none;
    border-radius: 20px;
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        color: #1a56db;
        background-color: white;
    }
`