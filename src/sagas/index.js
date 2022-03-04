import { put, takeLatest, all } from 'redux-saga/effects';
import { GITHUB_API_KEY } from '../constants/genaric';
import { GITHUB_TEXT_SEARCH, GITHUB_LANGUAGE_SEARCH } from '../constants/constants';
const GITHUB_API = 'https://api.github.com';

export function reposRequest(action) {
  const stringQueryText = action && action.stringQuery
    ? `+${encodeURIComponent(`${action.stringQuery} ${GITHUB_TEXT_SEARCH}`)}`
    : '';
  const languageQueryText = action && action.repoLanguage ? `${GITHUB_LANGUAGE_SEARCH}${action.repoLanguage}` : '';
  const API_URL = `${GITHUB_API}/search/repositories?q=org:Workday${stringQueryText}${languageQueryText}&order=desc`;
  
  try {
    const callout = fetch(API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        authorization: GITHUB_API_KEY ? `token ${GITHUB_API_KEY}`: '',
      },
    }).then((response) => response.json());
    return callout;
  } catch (e) {
  // eslint-disable-next-line no-console
    console.error('ERROR', e);
  }
}

export function* fetchRepos(action) {
  try {
    const callout = yield reposRequest(action);
    yield put({ type: 'REPOS_RECEIVED', json: callout.items });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('ERROR', e);
  }
}

export function* actionWatcher() {
  yield takeLatest('GET_REPOS', fetchRepos);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
