import reducer from './index';

describe('REDUCER', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ repoLanguage: 'TypeScript', stringQuery: '' });
  });

  it('should handle "GET_REPOS" action', () => {
    expect(reducer({}, { type: 'GET_REPOS' })).toEqual({ loading: true });
  });

  it('should handle "REPOS_RECEIVED" action', () => {
    const mockData = {
      loading: false,
      repos: [
        {
          name: 'canvas-kit',
          description: 'Development kits to implement UI following the Workday Canvas Design System',
        },
      ],
    };
    expect(reducer({}, { type: 'REPOS_RECEIVED', json: mockData })).toEqual({
      repos: mockData,
      loading: false,
    });
  });
});
