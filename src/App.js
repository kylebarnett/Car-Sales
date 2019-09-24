import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature } from './actions';
import { connect } from 'react-redux';

const App = (props) => {

  const removeFeature = (item) => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
  };

  const buyItem = (e, item) => {
    // dipsatch an action here to add an item
    e.preventDefault();
    props.addFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} />
        <Total />
      </div>
    </div>
  );
};

export default connect(null, { addFeature, removeFeature })(App);
