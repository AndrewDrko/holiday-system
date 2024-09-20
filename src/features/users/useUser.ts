import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getUser } from '../../services/apiUsers';

export function useUser() {
  const { holidayId } = useParams();

  const {
    isPending,
    data: user,
    error,
  } = useQuery({
    queryKey: ['user', holidayId],
    queryFn: () => getUser(holidayId || ''),
    retry: false,
  });

  return { isPending, user, error };
}
