import { useDispatch, useSelector } from 'react-redux';
import { useHomepageSlice } from './slice';
import { selectHomepage } from './slice/selectors';

export const useHomepage = () => {
  const dispatch = useDispatch();
  const { actions } = useHomepageSlice();
  const homepageState = useSelector(selectHomepage);
  const { loading, error, contents } = homepageState;

  const fetchContents = () => {
    dispatch(actions.getContents());
  };

  return {
    fetchContents,
    loading,
    error,
    contents,
  };
};
