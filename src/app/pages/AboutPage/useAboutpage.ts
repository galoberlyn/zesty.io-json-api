import { useDispatch, useSelector } from 'react-redux';
import { useAboutSlice } from './slice';
import { selectAbout } from './slice/selectors';

export const useAboutPage = () => {
  const dispatch = useDispatch();
  const { actions } = useAboutSlice();
  const homepageState = useSelector(selectAbout);
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
