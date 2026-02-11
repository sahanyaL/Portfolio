import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Front-End"}
            disc={`Proficient in frontend development, I specialize in crafting engaging user interfaces using HTML, CSS, and JavaScript. My focus is on creating responsive designs that enhance the user experience and bring digital products to life.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FiCodesandbox}
            title={"Back-End"}
            disc={`Experienced in backend development, I build robust server-side solutions using FastAPI, Node.js, Java, and Python with PostgreSQL databases. From REST API development to system architecture, I create efficient and scalable backend systems.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={CgWebsite}
            title={"Software Development"}
            disc={`As a software developer, I am proficient in the end-to-end software development process. From conceptualization to deployment, I utilize my skills in HTML, CSS, JavaScript, Node.js, React, Java, and Python to develop innovative solutions that address complex challenges and meet user needs.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Game Development"}
            disc={`Passionate about game development using Unity and C#, I design and build immersive 2D and 3D gaming experiences. From physics-based mechanics to enemy AI and level design, I bring creative game concepts to life with polished gameplay and engaging player interactions.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 4rem;
  gap: 1rem;
`;
