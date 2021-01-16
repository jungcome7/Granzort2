import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';

const useUser = () => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
};

export default useUser;