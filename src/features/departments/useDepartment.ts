import { useQuery } from '@tanstack/react-query';
import { getDepartments } from '../../services/apiDepartments';

export const useDepartmentes = () => {
  const {
    isPending,
    error,
    data: departments,
  } = useQuery({
    queryKey: ['departments'],
    queryFn: getDepartments,
  });

  return { isPending, error, departments };
};
