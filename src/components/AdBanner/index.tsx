import React from 'react';

import { Container } from './styles';

const AdBanner: React.FC = () => {
  return (
    <Container className="ad-banner">
      <span>Paulo D'Elia - </span>
      Me segue no <a href="https://github.com/paulohdelia" target="_blank" rel="noopener noreferrer" >GitHub</a>
    </Container>
  );
};

export default AdBanner;
