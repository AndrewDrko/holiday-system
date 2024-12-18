import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { joinName } from '../../../shared/utils/helpers';
import { API_DAI_BASE } from '../../../config';
import UserPhoto from '../../users/components/UserPhoto';
import { UserInfo } from '../../users/types';
import Table from '../../../shared/ui/Table';
import { getStatusHoliday } from '../../../shared/utils/holidayUtils';
import HolidayPending from './HolidayPending';

const HolidayRowStyled = styled.div`
  border-bottom: 1px solid var(--color-grey-100) !important;
  cursor: pointer;
  position: relative;
`;

const Notification = styled.div`
  background-color: #b91c1c;
  color: #fff;
  border: 1px solid var(--color-red-600);
  border-radius: 50%;
  font-size: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  position: absolute;
  top: 10%;
  left: -1.2rem;
  width: 2.5rem;
`;

const TextCont = styled.span`
  margin: auto 0;
  text-align: center;
  justify-self: center;
`;

const RequestListContainer = styled.div`
  background-color: var(--color-grey-0);

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  height: 7.5rem;
  border-radius: 11px;
  overflow-y: scroll;
`;

// const RequestListCard = styled.div`
//   background-color: var(--color-brand-100);
//   box-shadow: var(--shadow-sm);
//   color: var(--color-brand-800);
//   border-radius: 11px;

//   padding: 0.5rem 0.2rem;
//   display: flex;
//   flex-direction: column;
// `;

// const TextCreation = styled.span`
//   font-size: 1.6rem;
//   text-align: center;
//   font-weight: 600;
//   align-self: center;
// `;

// const TitleCreation = styled.span`
//   font-size: 1.2rem;
//   letter-spacing: 1px;
//   text-align: center;
// `;

const HolidayRow: React.FC<{ user: UserInfo }> = ({ user }) => {
  const { holidays } = user;
  const navigate = useNavigate();

  const { pendingHolidays } = getStatusHoliday(holidays);

  return (
    <HolidayRowStyled onClick={() => navigate(`${user.id}?history=request`)}>
      <Table.Row columns="">
        {pendingHolidays?.length ? (
          <Notification>{pendingHolidays?.length}</Notification>
        ) : null}

        <UserPhoto
          $type="circle"
          src={`${API_DAI_BASE}/img/user/${user?.photo}`}
          $size="medium"
          $border={true}
        />
        <span>{user?.employNumber}</span>
        <span>
          {joinName({
            name: user?.name || '',
            motherSurname: user?.paternSurname || '',
            paternSurname: user?.motherSurname || '',
          })}
        </span>
        <span>{user?.department?.name}</span>
        <RequestListContainer>
          {pendingHolidays.length !== 0 ? (
            pendingHolidays?.map((holiday, i) => {
              return <HolidayPending key={i} holiday={holiday} />;
            })
          ) : (
            <TextCont>No hay solicitudes</TextCont>
          )}
        </RequestListContainer>
      </Table.Row>
    </HolidayRowStyled>
  );
};

export default HolidayRow;
