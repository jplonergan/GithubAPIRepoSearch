export const getRepos = (repoLanguage, stringQuery) => ({
  type: 'GET_REPOS',
  repoLanguage,
  stringQuery,
});

export const selectRepoLanguage = (repoLanguage) => ({
  type: 'SELECT_LANGUAGE',
  repoLanguage,
});

export const setStringQuery = (stringQuery) => ({
  type: 'SET_STRING_QUERY',
  stringQuery,
});
