import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const { Icon, disc, title } = props;
    return (
        <Container>
            <span className='green'><Icon /></span>
            <h1>{title}</h1>
            <p>{disc}</p>
        </Container>
    )
}

export default Card;

const Container = styled.div`
    width: 100%;
    background: linear-gradient(159deg, #1a3a6b 0%, #1a56db 100%);
    padding: 1rem;
    text-align: center;
    color: #fff;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.8rem;
    }
`