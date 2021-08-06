import Wizard from './core/Wizard.jsx';
import LabelMaker from './features/shipping-label-maker/ShippingLabelMaker.jsx';
import React, { useState } from 'react';


function App() {
  const [label, updateLabel] = useState({
    'to': {},
    'from': {},
    'weight': 0,
    'shippingOption': 1,
  });
  return (
    <div className="App">
      <header className="App-header">
        <Wizard updateLabel={ updateLabel } label={ label } />
      </header>
    </div>
  );
}

export default App;
