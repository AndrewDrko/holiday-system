import styled from 'styled-components';
import Modal from '../../../shared/ui/Modal';
import CreateDeparment from './CreateDepartment';

import { HiOutlineFolder } from 'react-icons/hi2';

const BtnIcon = styled.button`
  background-color: var(--color-green-700);
  color: #fff;
  padding: 1rem;
  font-weight: 500;
  gap: 1rem;

  display: flex;
  align-items: center;

  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-grey-200);

  &:hover {
    background-color: var(--color-green-600);
  }

  & svg {
    width: 2.3rem;
    height: 2.3rem;
  }
`;

const DepartmentOptions = () => {
  return (
    <div>
      <div></div>
      <Modal>
        <Modal.Open opens="modal">
          <BtnIcon title="crear empleado">
            <HiOutlineFolder />
            Crear Departamento
          </BtnIcon>
        </Modal.Open>
        <Modal.Window name="modal">
          <CreateDeparment />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default DepartmentOptions;
