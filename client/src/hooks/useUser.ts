import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { signUp, User } from '../modules/user';

const useUser = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const requestSignUp = (userId: any, password: any) => {
    dispatch(signUp({ userId, password }));
  };

  return { user, requestSignUp };
};

export default useUser;
