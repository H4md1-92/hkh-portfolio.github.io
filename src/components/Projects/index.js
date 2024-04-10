import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projets</Title>
        <Desc>
          Mes projets réalisés, des applications Web à la conception graphique. Voici quelques-uns de mes projets.<br/> ⚠️🔨👷 Page en cours de réalisations.
          

        </Desc>
        <ToggleButtonGroup >
          {toggle === 'tous' ?
            <ToggleButton active value="tous" onClick={() => setToggle('all')}>Tous</ToggleButton>
            :
            <ToggleButton value="tous" onClick={() => setToggle('all')}>Tous</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="application web" onClick={() => setToggle('application web')}>APPLICATION WEB</ToggleButton>
            :
            <ToggleButton value="application web" onClick={() => setToggle('application web')}>APPLICATION WEB</ToggleButton>
          }
          <Divider />
          {toggle === 'graphic design' ?
            <ToggleButton active value="graphic design" onClick={() => setToggle('graphic design')}>GRAPHIC DESIGN</ToggleButton>
            :
            <ToggleButton value="graphic design" onClick={() => setToggle('graphic design')}>GRAPHIC DESIGN</ToggleButton>
          }
          <Divider />
          {toggle === 'computer programming' ?
            <ToggleButton active value="computer programming" onClick={() => setToggle('computer programming')}>COMPUTER PROGRAMMING</ToggleButton>
            :
            <ToggleButton value="computer programming" onClick={() => setToggle('computer programming')}>COMPUTER PROGRAMMING</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects