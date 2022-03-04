import * as actions from './index';

describe('ACTIONS', () => {
  it('should create an action with correct type GET_REPOS', () => {
    const expectedAction = {
      type: 'GET_REPOS'
    };
    expect(actions.getRepos()).toEqual(expectedAction);
  });

  it('should create an action with correct type SELECT_LANGUAGE', () => {
    const expectedAction = {
      type: 'SELECT_LANGUAGE'
    };
    expect(actions.selectRepoLanguage()).toEqual(expectedAction);
  });

  it('should create an action with correct type GET_REPOS', () => {
    const expectedAction = {
      type: 'SET_STRING_QUERY'
    };
    expect(actions.setStringQuery()).toEqual(expectedAction);
  });
});
