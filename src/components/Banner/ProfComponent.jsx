import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import pic from "./bannerUser.png";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'm</span>
          </h4>
          <h1 className="green">Piyumdi Liyanage</h1>
          <h3>Software Engineer & Game Developer</h3>
          <p>
            Software Engineering undergraduate with a passion for building creative, user-centric digital solutions. Skilled in full-cycle game development and accessible software design, turning complex challenges into high-impact applications.
          </p>

          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="http://www.linkedin.com/in/piyumdi-liyanage-5ab598251">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
          <DownloadBtn href="/cv/resume.pdf" download="resume.pdf" target="_blank" rel="noopener noreferrer">Download CV</DownloadBtn>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={pic}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #1a56db;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #1a56db51);
    :hover {
      filter: drop-shadow(0px 10px 10px #1a56db70);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #1a56db;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #1a56db70);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;

const DownloadBtn = styled.a`
  display: inline-block;
  text-decoration: none;
  margin-top: 1.5rem;
  padding: 0.7rem 2rem;
  background-color: #1a56db;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  filter: drop-shadow(0px 10px 10px #1a56db51);
  transition: all 400ms ease-in-out;
  &:hover {
    filter: drop-shadow(0px 10px 20px #1a56db70);
    transform: translateY(-2px);
  }
`;
