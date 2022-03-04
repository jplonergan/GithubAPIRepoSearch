import { put, takeLatest } from 'redux-saga/effects';
import { fetchRepos, actionWatcher } from './index';

describe('SAGAS', () => {
  it('should dispatch action "GET_REPOS" ', () => {
    const generator = actionWatcher();

    expect(generator.next().value).toEqual(takeLatest('GET_REPOS', fetchRepos));
    expect(generator.next().done).toBeTruthy();
  });

  // it('should dispatch action "REPOS_RECEIVED" with result from fetch Github API', () => {
  //   const mockResponse = { json: 'Some content' };
  //   const generator = fetchRepos();
  //   generator.next();

  //   expect(generator.next(mockResponse).value).toEqual(
  //     put({ type: 'REPOS_RECEIVED', json: 'Some content' }),
  //   );
  //   expect(generator.next().done).toBeTruthy();
  // });
});
