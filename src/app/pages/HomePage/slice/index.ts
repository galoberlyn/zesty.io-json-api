import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { homepageSaga } from './saga';
import { Contents, HomepageState } from './types';

export const initialState: HomepageState = {
  loading: false,
  contents: [],
  error: '',
};

const slice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    getContents(state) {
      state.loading = true;
    },
    getContentsSuccess(state, action: PayloadAction<Contents[]>) {
      state.loading = false;
      state.contents = action.payload;
    },
    getContentsFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: homepageActions } = slice;

export const useHomepageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: homepageSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useHomepageSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
