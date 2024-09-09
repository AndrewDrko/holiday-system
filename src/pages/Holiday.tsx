import { useStateApp } from '../context/stateAppContext';
import HolidayInfo from '../features/holiday/holidayInfo';
import HolidayOptions from '../features/holiday/HolildayOptions';
import FilterUser from '../features/users/FiltersUser';
import Row from '../ui/Row';
import Search from '../ui/Search';
import { formatText } from '../utils/helpers';
import Heading from './../ui/Heading';

const Holiday = () => {
  const { handleSearch } = useStateApp();

  return (
    <>
      <Row type="vertical">
        <Heading as="h1">Vacaciones</Heading>

        <Heading as="h2">Solicitudes</Heading>

        <Row type="horizontal">
          <Search
            width="60%"
            placeholder="Buscar por: nombre | N° Empleado"
            onSetQuery={(query) => handleSearch('user', formatText(query))}
            popUpFilter={<FilterUser />}
          />
          <HolidayOptions />
        </Row>
      </Row>
      <HolidayInfo />
    </>
  );
};

export default Holiday;
