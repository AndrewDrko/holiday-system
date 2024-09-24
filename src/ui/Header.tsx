// import { HiBell } from 'react-icons/hi2';
import { HiOutlineBell } from 'react-icons/hi2';
import { HiOutlineMoon } from 'react-icons/hi2';
import { HiOutlineSun } from 'react-icons/hi2';
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';

import FloatFeat from './FloatFeat';
import UserPhoto from './../../src/features/users/UserPhoto';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  position: relative;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: space-between;
  gap: 2.4rem;
  background-color: var(--color-grey-0);
`;

const UserView = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

const ImageContainer = styled.div``;

const Bell = styled.div`
  display: inline-block;
  border-radius: 50%;

  cursor: pointer;

  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.8rem;
    width: 3rem;
    stroke: var(--color-grey-600);
  }
  position: relative;
`;

const Notification = styled.div`
  position: absolute;
  top: -0.3rem;
  right: 0.1rem;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1rem;
  background-color: var(--color-red-500);
  border: 1px solid var(--color-red-600);
  color: var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  user-select: none;
`;

const DarkMode = styled.div`
  display: inline-block;

  cursor: pointer;

  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.8rem;
    width: 3rem;
    stroke: var(--color-grey-600);
  }

  position: relative;
`;

const LogOff = styled.div`
  cursor: pointer;

  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.8rem;
    width: 3rem;
    stroke: var(--color-grey-600);
  }
`;

const IconSpacing = styled.div`
  display: flex;
  gap: 1.2rem;
`;

function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    const switchDark = document.querySelector('html');

    switchDark?.classList.toggle('dark-mode');
  }, [isDark]);

  return (
    <StyledHeader>
      <UserView to="/me" title="Configuración de Usuario">
        <ImageContainer>
          <UserPhoto
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrDpzWSWvT8WQKdSxpdEaoev3e0uixuPvdw&s"
            alt="user photo"
            $border={true}
          />
        </ImageContainer>
        <span>José Armando</span>
      </UserView>

      <IconSpacing>
        <DarkMode title="Modo Oscuro / Modo Claro" onClick={() => setIsDark(!isDark)}>
          {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
        </DarkMode>

        <Bell title="Notificaciones" onClick={() => setClicked(!isClicked)}>
          <Notification>5</Notification>
          <HiOutlineBell></HiOutlineBell>
        </Bell>
        {isClicked ? <FloatFeat onClose={() => setClicked(false)} /> : null}
        <LogOff title="Cerrar Sesión">
          <HiOutlineArrowRightOnRectangle />
        </LogOff>
      </IconSpacing>
    </StyledHeader>
  );
}

export default Header;
