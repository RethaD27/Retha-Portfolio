import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-commerce Web Application",
      description: "A fully functional e-commerce platform with payment integration and responsive design.",
      imgUrl: projImg1,
    },
    {
      title: "Mobile App for Health Monitoring",
      description: "A mobile solution to track health metrics and provide personalized insights.",
      imgUrl: projImg2,
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Development of an AI-driven dashboard for data visualization and decision-making.",
      imgUrl: projImg3,
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Development of an AI-driven dashboard for data visualization and decision-making.",
      imgUrl: projImg1,
    },
    {
      title: "E-commerce Web Application",
      description: "A fully functional e-commerce platform with payment integration and responsive design.",
      imgUrl: projImg2,
    },
    {
      title: "Mobile App for Health Monitoring",
      description: "A mobile solution to track health metrics and provide personalized insights.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore some of the innovative projects I have worked on, ranging from AI-powered dashboards to mobile health apps. Each project showcases a blend of design, development, and cutting-edge technology.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Recent Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Archived Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>These are some of the older projects I've worked on, showcasing earlier development work that helped build a foundation for the more advanced projects I handle today. Although archived, these projects reflect key learning experiences and growth over time in areas like web development, and mobile app development.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
