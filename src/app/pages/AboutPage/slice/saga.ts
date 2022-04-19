import { call, put, takeLatest } from 'redux-saga/effects';
import { aboutActions as actions } from '.';
import { getContentsAPI } from './api';

function* getContentsSaga() {
  try {
    const response = yield call(getContentsAPI);
    yield put(
      actions.getContentsSuccess(response.data.data[0].content.page_content),
    );
  } catch (error) {
    yield put(
      actions.getContentsFailed(
        'Failed to get contents, please try again later',
      ),
    );
  }
}

export function* aboutSaga() {
  yield takeLatest(actions.getContents, getContentsSaga);
}
