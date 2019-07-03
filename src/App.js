import React from 'react';

import { connect } from 'react-redux';

function App() {
  return (
    <div>
      Look in Redux devtools to view the store's state!
    </div>
  );
}

const mapStoreStateToProps = state => ({
  instrumentTypes: state.instrumentTypes,
  instrument: state.instrument
});

export default connect(mapStoreStateToProps)(App);
