import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://github.com/paulohdelia.png" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container >
  );
}

export default Layout;