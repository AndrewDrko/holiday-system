import styled from 'styled-components';
import RequestVacation from '../features/holiday/RequestVacation';
import { useState } from 'react';
import { HiPuzzlePiece } from 'react-icons/hi2';

const FloatFeatStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 2.4rem; */
  position: absolute;
  top: 3.2rem;
  right: 0;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-300);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
  border-radius: 9px;
  height: 55rem;
  width: 45rem;
  z-index: 999;
  cursor: auto;

  /* padding: 2rem 0.4rem; */
`;

const FloatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  /* padding-top: 2rem; */
`;

const FloatTitle = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
`;

const GoTo = styled.div``;

const Main = styled.main`
  background-color: var(--color-grey-50);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  /* gap: 2.8rem; */
  height: 100%;
  font-size: 1.8rem;
  border-top: 1px solid var(--color-grey-300);
  border-bottom: 1px solid var(--color-grey-300);
  /* padding: 2rem 2.4rem; */
`;

const Message = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2.4rem;
  line-height: 1.2;
  font-weight: 600;
  font-size: 2.5rem;

  color: var(--color-grey-400);

  & svg {
    height: 10rem !important;
    width: 10rem !important;
    fill: var(--color-grey-300);
  }
`;

const LinkShowMore = styled.a`
  display: flex;
  justify-content: center;
  transition: all 0.1s;
  margin: 2rem 0;

  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-red-800);
    border-radius: var(--border-radius-sm);
  }

  &:hover {
    color: var(--color-red-800);
  }
`;

const FloatFeat = () => {
  //state component (control component)
  const [isEmpty] = useState(false);

  return (
    <FloatFeatStyled>
      <FloatHeader>
        <FloatTitle>Notificaciones</FloatTitle>
      </FloatHeader>
      <Main>
        <RequestVacation></RequestVacation>

        {isEmpty && (
          <Message>
            <HiPuzzlePiece />
            <span>No hay datos para mostrar</span>
          </Message>
        )}
      </Main>

      <GoTo>
        <LinkShowMore href="#">Ver Más</LinkShowMore>
      </GoTo>
    </FloatFeatStyled>
  );
};

export default FloatFeat;
