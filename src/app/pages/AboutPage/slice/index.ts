import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { aboutSaga } from './saga';
import { AboutState } from './types';

export const initialState: AboutState = {
  loading: false,
  contents: '',
  error: '',
};

const slice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    getContents(state) {
      state.loading = true;
    },
    getContentsSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.contents = action.payload;
    },
    getContentsFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: aboutActions } = slice;

export const useAboutSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: aboutSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAboutSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
