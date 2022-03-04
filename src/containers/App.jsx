import React from 'react';
import RepoList from '../components/RepoList';
import Loading from '../components/Loading';
import Search from '../components/Search';

function App() {
  return (
    <div>
      <div className="slds-grid slds-wrap">
        <div className="slds-col slds-size_1-of-1">
          <span>
            <Search />
          </span>
        </div>
        <div className="slds-col slds-size_1-of-1">
          <span>
            <RepoList />
          </span>
        </div>
      </div>
      <Loading />
    </div>
  );
}

export default App;
