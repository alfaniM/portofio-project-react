import React from 'react';
import FullScreenSection from './FullScreenSection';
import { Box, Heading } from '@chakra-ui/react';
import Card from './Card';

const projects = [
  {
    title: 'IDKarier',
    description: 'Mobile App Survey for Career Development Center UIN Syarif Hidayatullah Jakarta',
    getImageSrc: () => require('../images/photo_1.png'),
  },
  {
    title: 'Adoptkuy',
    description: 'Finding adopted animals safely and reliably',
    getImageSrc: () => require('../images/photo_2.webp'),
  },
  {
    title: 'Ojek Sayur',
    description: 'Discover the transformative journey of our mobile app through this concise case study. Learn how our app solved real-life problems, improved user experiences, and achieved remarkable results.',
    getImageSrc: () => require('../images/photo_3.webp'),
  },
  {
    title: 'Graphic Designer',
    description: 'ASEAN Youth Instagram Feed Designer',
    getImageSrc: () => require('../images/photo_4.webp'),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection backgroundColor='#14532d' isDarkBackground p={8} alignItems='flex-start' spacing={8}>
      <Heading as='h1' id='projects-section'>
        Featured Projects
      </Heading>
      <Box display='grid' gridTemplateColumns='repeat(2,minmax(0,1fr))' gridGap={8}>
        {projects.map((project) => (
          <Card key={project.title} title={project.title} description={project.description} imageSrc={project.getImageSrc()} />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
