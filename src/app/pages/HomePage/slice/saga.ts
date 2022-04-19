import { call, put, takeLatest } from 'redux-saga/effects';
import { homepageActions as actions } from '.';
import { getContentsAPI } from './api';

function* getContentsSaga() {
  try {
    const response = yield call(getContentsAPI);
    yield put(actions.getContentsSuccess(response.data));
  } catch (error) {
    yield put(
      actions.getContentsFailed(
        'Failed to get contents, please try again later',
      ),
    );
  }
}

export function* homepageSaga() {
  yield takeLatest(actions.getContents, getContentsSaga);
}
