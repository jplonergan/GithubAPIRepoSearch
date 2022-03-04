import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from '@salesforce/design-system-react';

function Loading({ loading }) {
  return loading ? (
    <div style={{ textAlign: 'center' }}>
      <Spinner size="large" variant="base" assistiveText={{ label: 'Loading Repos' }} />
    </div>
  ) : null;
}

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default connect(mapStateToProps, null)(Loading);
