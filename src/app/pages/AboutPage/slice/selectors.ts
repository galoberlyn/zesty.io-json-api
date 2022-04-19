import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.about || initialState;

export const selectAbout = createSelector([selectSlice], state => state);
