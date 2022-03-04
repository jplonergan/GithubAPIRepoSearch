import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Search from './Search';
import { selectRepoLanguage, getRepos, setStringQuery } from '../actions';
import Picker from './Picker';
import '../../setupTests';

describe('>>>H O M E --- REACT-REDUX (Mount + wrapping in <Provider>)', () => {
  const initialState = {
    repoLanguage: 'TypeScript',
    stringQuery: '',
  };
  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Search />
      </Provider>,
    );
  });

  it('+++ check Input Prop matches with initialState', () => {
    expect(wrapper.find('input').prop('value')).toEqual(initialState.stringQuery);
  });
  it('+++ check Picker Prop matches with initialState', () => {
    expect(wrapper.find(Picker).prop('value')).toEqual(initialState.repoLanguage);
  });

  it('+++ render the component', () => {
    expect(wrapper.find(Search).length).toEqual(1);
  });

  it('+++ check action on dispatching ', () => {
    const action = store.getActions();
    store.dispatch(getRepos());
    store.dispatch(setStringQuery());
    store.dispatch(selectRepoLanguage());

    expect(action[0].type).toBe('GET_REPOS');
    expect(action[1].type).toBe('SET_STRING_QUERY');
    expect(action[2].type).toBe('SELECT_LANGUAGE');
  });

  it('input onChange function should call setStringQuery', () => {
    const setStringQuery = jest.fn();

    const { WrappedComponent } = Search;
    const newwrapper = shallow(<WrappedComponent setStringQuery={setStringQuery} />);
    newwrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { name: 'search', value: 'test' } });
    expect(setStringQuery).toHaveBeenCalled();
  });

  it('should render correctly <Search> component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
