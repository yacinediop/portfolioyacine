import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../img/color-sharp2.png';
import projImg1 from '../img/project-img1.png';
import projImg2 from '../img/project-img2.png';
import projImg3 from '../img/project-img3.png';

const Projects = () => {
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
      return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                      <h2>Projects</h2>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis unde nemo voluptas molestias labore provident, illo tenetur aut recusandae asperiores!</p>
                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center"           id="pills-tab">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((projects, index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...projects}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="seconde">Lorem Impsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem Impsum</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
             <img className='background-image-right' src={colorSharp2}  alt=""/>
        </section>
      )
}

export default Projects;