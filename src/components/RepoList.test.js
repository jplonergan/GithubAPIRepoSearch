import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import RepoList from './RepoList';
import '../../setupTests';

it('should render correctly <RepoList>', () => {
  const mockStore = configureStore();
  const store = mockStore({
    repos: [
      {
        id: 1,
        name: 'Mock Title',
        language: 'TypeScript',
        description: 'Mock Description',
        html_url: 'bbc.com',
        topics: ['topic1'],
      },
    ],
    loading: false,
  });
  const wrapper = mount(
    <Provider store={store}>
      <RepoList />
    </Provider>,
  );

  expect(wrapper).toMatchSnapshot();
});
