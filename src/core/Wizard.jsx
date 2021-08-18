import React, { useState } from 'react';
import GetReceiverAddress from './components/GetReceiverAddress.jsx';
import GetSenderAddress from './components/GetSenderAddress.jsx';
import GetShippingOption from './components/GetShippingOption.jsx';
import GetWeight from './components/GetWeight.jsx';
import Confirm from './components/Confirm.jsx';
//import ShippingLabelMaker from '../features/shipping-label-maker/ShippingLabelMaker.jsx';

const Wizard = ({ label, updateLabel }) => {

  const pages = [
    <GetReceiverAddress updateLabel={ updateLabel } label={ label } />,
    <GetSenderAddress updateLabel={ updateLabel } label = { label } />,
    <GetShippingOption updateLabel={ updateLabel } label = { label } />,
    <GetWeight updateLabel={ updateLabel } label = { label } />,
    <Confirm label={ label }/>
  ];
  const [page, updatePage] = useState(0);

  const handleClick = (e) => {
    if (e.target.id === 'prev') {
      // Create some logic that checks to make sure all fields are filled
      // if (!validPage) {

      // } else {
        updatePage(page - 1);
      // }
    } else {
      // if (!validPage) {

      // } else {
        updatePage(page + 1);
      // }
    }
  };

  return (
    <div>
      { pages[page] }
      <br />
      { page !== 0 ?
        <button id="prev" onClick={ handleClick }>Previous</button> :
        null
      }
      { page !== 4 ?
        <button id="next" onClick={ handleClick }>Next</button> :
        null
      }
    </div>
  );
}

export default Wizard;