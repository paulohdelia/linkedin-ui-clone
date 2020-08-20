import React from 'react';

import { Container, Wrapper, SearchInput, ProfileCircle, LinkedinIcon, HomeIcon, NotificationsIcon, CaretDownIcon } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedinIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>
            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileCircle src="https://github.com/paulohdelia.png" />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container >
  );
}

export default Layout;