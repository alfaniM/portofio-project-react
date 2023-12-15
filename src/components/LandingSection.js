import React from 'react';
import { Avatar, Heading, VStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const greeting = 'Hello, I am Alfani!';
const bio_1 = 'A frontend developer who love design';
const bio_2 = 'specialised in React and UX Design';

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection justifyContent='center' alignItems='center' isDarkBackground backgroundColor='#2A4365'>
    <VStack>
      <Avatar size='2xl' name='Muhammad Alfani' src='https://github.com/alfaniM/alfaniM/assets/49194795/b543ae01-4fee-4edd-81bb-175c186589fd' />
      <p>{greeting}</p>
      <Heading>{bio_1}</Heading>
      <Heading>{bio_2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
