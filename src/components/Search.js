import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@salesforce/design-system-react';
import { GITHUB_API_LANGUAGE_OPTIONS } from '../constants/constants';
import Picker from './Picker';
import { selectRepoLanguage, getRepos, setStringQuery } from '../actions';

function Search({
  repoLanguage, stringQuery, getRepos, setStringQuery, selectRepoLanguage,
}) {
  const handleSearch = () => getRepos(repoLanguage, stringQuery);
  const handleInputChange = (value) => setStringQuery(value);
  const handlePickerChange = (e) => selectRepoLanguage(e);

  return (
    <div>
      <h1 className="slds-text-heading_large slds-p-around_large">Workday Github Repository Search</h1>
      <div className="slds-grid slds-wrap">
        <div className="slds-col slds-size_1-of-1 slds-small-size_1-of-1 slds-medium-size_4-of-6 slds-large-size_3-of-6 slds-p-around_small">
          <span>
            <input
              id="base-id"
              className="slds-input"
              name="search"
              value={stringQuery}
              placeholder="Search Repository Name/Description"
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </span>
        </div>
        <div className="slds-col slds-size_1-of-1 slds-small-size_1-of-1 slds-medium-size_2-of-6 slds-large-size_2-of-6 slds-p-around_small">
          <span>
            <Picker
              value={repoLanguage}
              onChange={(e) => handlePickerChange(e)}
              options={GITHUB_API_LANGUAGE_OPTIONS}
            />
          </span>
        </div>
        <div className="slds-col slds-size_1-of-1 slds-small-size_1-of-1 slds-medium-size_6-of-6 slds-large-size_1-of-6 slds-p-around_small">
          <span className="slds-float_right">
            <Button label="Search" variant="brand" onClick={handleSearch} />
          </span>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  selectRepoLanguage,
  getRepos,
  setStringQuery,
};

const mapStateToProps = (state) => ({
  repoLanguage: state.repoLanguage,
  stringQuery: state.stringQuery,
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
