const getDefaultState = () => ({
  repoLanguage: 'TypeScript',
  stringQuery: '',
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_REPOS':
      return { ...state, loading: true };
    case 'REPOS_RECEIVED':
      return { ...state, repos: action.json, loading: false };
    case 'SELECT_LANGUAGE':
      return { ...state, repoLanguage: action.repoLanguage };
    case 'SET_STRING_QUERY':
      return { ...state, stringQuery: action.stringQuery };
    default:
      return getDefaultState();
  }
};

export default reducer;
